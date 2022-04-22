import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { prisma, Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async login(@Body() data: { email: string; password: string }) {
    const { email, password } = data;
    try {
      const user = await this.userService.login({
        where: {
          email: email,
        },
        select: {
          id: true,
          image: true,
          name: true,
          email: true,
          password: true,
        },
      });
      if (user?.password) {
        const ValidPass = await bcrypt.compare(password, user.password);
        if (ValidPass) {
          return user;
        } else {
          throw new HttpException('Email or Password is wrong', 401);
        }
      } else {
        throw new HttpException('User Dosent Exist', 404);
      }
    } catch (error) {
      throw new HttpException('Error', 500);
    }
  }

  @Post()
  async register(@Body() data: Prisma.UsersCreateInput) {
    try {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
      const user = await this.userService.register(data);
      return user;
    } catch (error) {
      throw new HttpException('Error', 500);
    }
  }
}
