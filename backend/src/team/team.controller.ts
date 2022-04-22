import { Controller, Get, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  createTeam(@Body() data: Prisma.TeamCreateInput) {
    return this.teamService.createTeam(data);
  }

  @Get()
  showTeam() {
    return this.teamService.showTeam({
      include: {
        competition: true,
      },
    });
  }
}
