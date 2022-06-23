import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { of } from 'rxjs';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(data, user_id: string) {
    const competitionData = data.competition;

    const competition = await this.prisma.competition.create({
      data: {
        ...competitionData,
      },
    });

    const teamData = { ...data.team, competition_id: competition.id };

    return this.prisma.team.create({
      data: {
        ...teamData,
        leader_id: user_id,
        TeamMember: {
          create: {
            user_id: user_id,
            status: 2,
          },
        },
      },
    });
  }

  async showTeam() {
    const response = await this.prisma.team.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        competition: true,
        TeamMember: {
          where: {
            status: 2,
          },
        },
      },
    });

    return response;
  }

  async showFilteredTeam(query) {
    const { search, competition, organizer } = query;
    let filter = {};

    if (search) {
      filter = {
        where: {
          team_name: {
            contains: search,
          },
        },
      };
    }

    let response = await this.prisma.team.findMany({
      ...filter,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        competition: true,
        TeamMember: {
          where: {
            status: 2,
          },
        },
      },
    });

    if (competition) {
      response = response.filter((val) =>
        val.competition.name.toLowerCase().includes(competition),
      );
    }

    if (organizer) {
      response = response.filter((val) =>
        val.competition.organizer.toLowerCase().includes(organizer),
      );
    }

    return response;
  }

  async detailTeam(id: string, req: any) {
    const response = await this.prisma.team.findUnique({
      where: {
        id: id,
      },
      include: {
        competition: true,
        leader: {
          select: {
            name: true,
            academic_year: true,
            email: true,
            image: true,
            id: true,
            major: true,
          },
        },
        TeamMember: {
          select: {
            status: true,
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (!response) {
      return null;
    }

    let statusJoined = 0;

    if (req && req.user) {
      const findMember = response.TeamMember.find(
        (val) => val.user.id === req.user.id,
      );
      statusJoined = findMember ? findMember.status : 0;
    }

    const { TeamMember, ...rest } = response;

    return {
      ...rest,
      TeamMember: TeamMember.filter((val) => val.status == 2),
      join_status: statusJoined,
    };
  }

  async joinTeam(id: string, user_id: string): Promise<any> {
    try {
      await this.prisma.teamMember.create({
        data: {
          team_id: id,
          user_id: user_id,
          status: 1,
        },
      });

      return {
        success: true,
        code: 200,
        message: 'Success request to join the team',
      };
    } catch (error) {
      if (error.code === 'P2002') {
        return {
          success: false,
          code: 401,
          message: 'Already requested/joined the team',
        };
      }
      return null;
    }
  }

  async showOffers(user_id: string) {
    const response = await this.prisma.team.findMany({
      where: {
        leader_id: user_id,
      },
      include: {
        TeamMember: {
          include: {
            user: {
              select: {
                name: true,
                skills: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (response) {
      const mappedResponse = response
        .map((res) => ({
          team_name: res.team_name,
          offers: res.TeamMember.filter((team) => team.status === 1),
        }))
        .filter((res) => res.offers.length > 0);

      return mappedResponse;
    }

    return null;
  }

  async handleOffer(action: string, id: string) {
    if (!['ACCEPT', 'DECLINE'].includes(action)) {
      return null;
    }

    const response = await this.prisma.teamMember.update({
      where: {
        id: id,
      },
      data: {
        status: action === 'ACCEPT' ? 2 : 0,
      },
    });

    if (response) {
      return response;
    }

    return null;
  }
}
