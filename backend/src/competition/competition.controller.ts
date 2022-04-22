import { Controller, Get, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompetitionService } from './competition.service';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Post()
  addCompetition(@Body() data: Prisma.CompetitionCreateInput) {
    return this.competitionService.addCompetition(data);
  }

  @Get()
  showCompetition() {
    return this.competitionService.showCompetition({});
  }
}
