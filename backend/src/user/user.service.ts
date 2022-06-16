import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
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
    return this.prisma.users.findFirst({ where, select });
  }
}
