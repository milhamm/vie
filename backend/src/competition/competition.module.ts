import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompetitionController],
  providers: [PrismaService, CompetitionService],
})
export class CompetitionModule {}
