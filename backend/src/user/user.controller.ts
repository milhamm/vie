import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() data: { email: string; password: string }) {
    const { email, password } = data;

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
      console.log(ValidPass);
      if (ValidPass) {
        return user;
      } else {
        throw new HttpException('Email or Password is wrong', 401);
      }
    } else {
      throw new HttpException('User Dosent Exist', 404);
    }
  }

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
}
