import {
  Controller,
  Post,
  Body,
  HttpException,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
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

  /**
   * A function for registering new user
   * @param data : containg user data, name, email, password, academic year
   * @returns user data
   */

  @Post('register')
  async register(@Body() data: Prisma.UsersCreateInput) {
    try {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
      const user = await this.userService.register(data);
      return user;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('history')
  async addHistory(
    @Request() req,
    @Body() data: { name: string; status: string; role: string; date: string },
  ) {
    const userId = req.user.id;
    return this.userService.addHistory({ ...data, user_id: userId });
  }
}