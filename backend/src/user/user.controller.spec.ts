import { HttpException, UnauthorizedException } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { jwtConstant } from '../auth/constants';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const loggedInUser = {
  id: 'cl2anv7oj0000fwfy52i3t7ts',
  image: null,
  name: 'Muhammad Ilham Mubarak',
  email: 'm.ilham.mubarak@gmail.com',
  password: '$2b$10$Fju2/4vmPJkeNwUVeJ8Lduykk6jo/i0jeKEXpmivo06oDoeQ/09Uq',
};

describe('UserController', () => {
  let controller: UserController;
  let prisma: PrismaService;
  let auth: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: jwtConstant.secret,
          signOptions: { expiresIn: '7d' },
        }),
      ],
      controllers: [UserController],
      providers: [UserService, PrismaService, AuthService],
    }).compile();

    controller = module.get<UserController>(UserController);
    prisma = module.get<PrismaService>(PrismaService);
    auth = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Login Flow', () => {
    it('should returns access token', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(loggedInUser);

      const response = await controller.login({
        user: {
          email: 'm.ilham.mubarak@gmail.com',
          password: 'rpl123',
        },
      });

      expect(response.access_token).toBeDefined();
    });

    it('should returns error when email/password is wrong', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce({
        password: 'hehe',
      });

      try {
        await controller.login({
          user: {
            email: 'm.ilham.mubarak@gmail.com',
            password: 'rpl1234',
          },
        });
      } catch (error) {
        expect(error).toHaveProperty('message', 'Unauthorized');
        expect(error).toHaveProperty('statusCode', 401);
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});
