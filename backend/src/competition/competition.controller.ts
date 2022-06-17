import { Controller, Get, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompetitionService } from './competition.service';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  /**
   * A function for creating new competition with competition data
   * @param data: competition name, start date, etc
   * @returns new competition created
   */

  @Post()
  addCompetition(@Body() data: Prisma.CompetitionCreateInput) {
    return this.competitionService.addCompetition(data);
  }

  /**
   * A function to show a competition
   * @returns competition
   */

  @Get()
  showCompetition() {
    return this.competitionService.showCompetition({});
  }
}
