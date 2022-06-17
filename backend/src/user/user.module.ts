import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from '../auth/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController],
  providers: [PrismaService, UserService, AuthService],
  exports: [UserService],
})
export class UserModule {}
