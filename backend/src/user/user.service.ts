import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(data: Prisma.UsersCreateInput) {
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
        history: false,
      },
    });
  }

  async addHistory(data: Prisma.HistoryCreateManyInput): Promise<any> {
    return this.prisma.history.create({ data });
  }
}
