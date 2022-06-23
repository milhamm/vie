import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LabsService {
  constructor(private prisma: PrismaService, private user: UserService) {}

  create(data) {
    return this.prisma.lab.create(data);
  }

  profile(id) {
    return this.prisma.lab.findFirst({
      where: {
        admin_id: id,
      },
      include: {
        LabMember: {
          include: {
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
  }

  async addMember(id, data) {
    try {
      const response = await this.user.register(data);

      return await this.prisma.labMember.create({
        data: {
          lab_id: id,
          user_id: response.id,
        },
      });
    } catch (error) {}
  }
}
