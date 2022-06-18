import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(data: Prisma.TeamCreateManyInput, user_id: string) {
    return this.prisma.team.create({
      data: {
        ...data,
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

    let statusJoined = 0;

    if (req && req.user) {
      const findMember = response.TeamMember.find(
        (val) => val.user.id === req.user.id,
      );
      statusJoined = findMember ? findMember.status : 0;
    }

    if (!response) {
      return null;
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
}
