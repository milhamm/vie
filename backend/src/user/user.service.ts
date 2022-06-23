import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(data: Prisma.UsersCreateInput) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    return this.prisma.users.create({ data });
  }

  async login(params: {
    where?: Prisma.UsersWhereInput;
    select?: Prisma.UsersSelect;
  }): Promise<any> {
    const { where, select } = params;
    const response = await this.prisma.users.findFirst({ where, select });
    return response;
  }

  async profile(params: { where?: Prisma.UsersWhereInput }): Promise<any> {
    const { where } = params;
    return this.prisma.users.findFirst({
      where,
      include: {
        history: {
          orderBy: {
            created_at: 'desc',
          },
        },
      },
    });
  }

  async addHistory(data: Prisma.HistoryCreateManyInput): Promise<any> {
    return this.prisma.history.create({ data });
  }

  async getOwnTeam(id: string) {
    const response = await this.prisma.team.findMany({
      orderBy: {
        created_at: 'desc',
      },
      where: {
        TeamMember: {
          some: {
            user_id: id,
            AND: {
              status: {
                not: 1,
              },
            },
          },
        },
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
}
