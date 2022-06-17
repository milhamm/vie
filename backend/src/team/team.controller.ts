import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  /**
   * A function for creating new team with team data
   * @param data: team name, etc
   * @returns new team created
   */
  @Post()
  createTeam(@Body() data: Prisma.TeamCreateInput) {
    return this.teamService.createTeam(data);
  }

  /**
   * A function to show a team
   * @returns team
   */
  @Get()
  showTeam() {
    return this.teamService.showTeam({
      include: {
        competition: true,
      },
    });
  }

  /**
   *
   * @param id an ID to search
   * @returns team detail
   */
  @Get(':id')
  async detailTeam(@Param('id') id: string) {
    const response = await this.teamService.detailTeam(id);

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }
}
