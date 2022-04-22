import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TeamController],
  providers: [PrismaService, TeamService],
})
export class TeamModule {}
