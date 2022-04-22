import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CompetitionService {
  constructor(private prisma: PrismaService) {}

  async addCompetition(data: Prisma.CompetitionCreateInput) {
    return this.prisma.competition.create({ data });
  }

  async showCompetition(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CompetitionWhereUniqueInput;
    where?: Prisma.CompetitionWhereInput;
    orderBy?: Prisma.CompetitionOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.competition.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
