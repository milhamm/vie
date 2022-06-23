import { Module } from '@nestjs/common';
import { LabsService } from './labs.service';
import { LabsController } from './labs.controller';
import { PrismaService } from '../prisma.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [LabsController],
  providers: [PrismaService, LabsService, UserService],
})
export class LabsModule {}
