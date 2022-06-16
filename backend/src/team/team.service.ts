import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(data: Prisma.TeamCreateInput) {
    return this.prisma.team.create({ data });
  }

  async showTeam(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TeamWhereUniqueInput;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput;
    include?: Prisma.TeamInclude;
  }) {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.team.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }
}
