import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
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

    if (user && user.password) {
      const isPasswordSame = await bcrypt.compare(pass, user.password);
      if (isPasswordSame) {
        const { password, ...response } = user;
        return response;
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
