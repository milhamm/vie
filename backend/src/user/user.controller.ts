import {
  Controller,
  Post,
  Body,
  HttpException,
  Request,
  UseGuards,
  Get,
  Req,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';

import { JWTGuard } from '../auth/guards/jwt.guard';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Function for authenticate users
   * @param req : contains email and password
   * @returns user data
   */

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    const { password, ...response } = await this.userService.profile({
      where: {
        id: req.user.id,
      },
    });

    return response;
  }

  @Get('profile/:id')
  async getProfileById(@Param('id') id) {
    const { password, ...response } = await this.userService.profile({
      where: {
        id: id,
      },
    });

    return response;
  }

  @UseGuards(JWTGuard)
  @Get('/teams')
  async getOwnTeam(@Req() req) {
    return this.userService.getOwnTeam(req.user.id);
  }

  @Get('/teams/:id')
  async getOwnTeamById(@Param('id') id) {
    return this.userService.getOwnTeam(id);
  }

  /**
   * A function for registering new user
   * @param data : containg user data, name, email, password, academic year
   * @returns user data
   */

  @Post('register')
  async register(@Body() data: Prisma.UsersCreateInput) {
    try {
      const user = await this.userService.register(data);
      return user;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  @UseGuards(JWTGuard)
  @Post('history')
  async addHistory(
    @Request() req,
    @Body() data: { name: string; status: string; role: string; date: string },
  ) {
    const userId = req.user.id;
    return this.userService.addHistory({ ...data, user_id: userId });
  }
}
