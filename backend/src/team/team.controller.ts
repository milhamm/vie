import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  UseGuards,
  Req,
  HttpException,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { JWTGuard } from '../auth/guards/jwt.guard';
import { OptionalJWT } from '../auth/guards/optional.guard';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  /**
   * A function for creating new team with team data
   * @param data: team name, etc
   * @returns new team created
   */
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createTeam(@Body() data, @Req() req) {
    return this.teamService.createTeam(data, req.user.id);
  }

  /**
   * A function to show a team
   * @returns team
   */
  @Get()
  async showTeam(@Query() query) {
    if (Object.keys(query).length) {
      const response = await this.teamService.showFilteredTeam(query);
      return response;
    } else {
      const response = await this.teamService.showTeam();
      return response;
    }
  }

  /**
   * A function to show all offers that the user receive
   * @param req
   * @returns all offers
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('/offers')
  async offers(@Req() req) {
    const response = await this.teamService.showOffers(req.user.id);
    return response;
  }

  @UseGuards(JWTGuard)
  @Post('/offers/:id')
  async handleOffer(@Body() data, @Param('id') id) {
    const response = await this.teamService.handleOffer(data.action, id);

    if (!response) {
      throw new HttpException('Bad Request', 400);
    }

    return response;
  }

  /**
   * A function to display the team detail
   * @param id an ID to search
   * @returns team detail
   */
  @UseGuards(OptionalJWT)
  @Get(':id')
  async detailTeam(@Param('id') id: string, @Req() req) {
    const response = await this.teamService.detailTeam(id, req);

    if (!response) {
      throw new NotFoundException();
    }

    return response;
  }

  /**
   * A function used to join a certain team
   * @param id Competition ID
   * @param req Request parameter to get the user id
   * @returns response message on success or failed
   */
  @UseGuards(AuthGuard('jwt'))
  @Get(':id/join')
  async joinTeam(@Param('id') id: string, @Req() req) {
    const response = await this.teamService.joinTeam(id, req.user.id);

    if (!response.success) {
      throw new HttpException(response.message, response.code);
    }

    return response;
  }
}
