import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService, AuthService],
    }).compile();

    controller = module.get<UserController>(UserController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Login Flow', () => {
    it('should returns user data', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(loggedInUser);
      expect(
        await controller.login({
          email: 'm.ilham.mubarak@gmail.com',
          password: 'rpl123',
        }),
      ).toBe(loggedInUser);
    });

    it('should returns error when email/password is wrong', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce({
        password: 'hehe',
      });

      try {
        await controller.login({
          email: 'm.ilham.mubarak@gmail.com',
          password: 'rpl1234',
        });
      } catch (error) {
        expect(error).toHaveProperty('response', 'Email or Password is wrong');
        expect(error).toHaveProperty('status', 401);
        expect(error).toBeInstanceOf(HttpException);
      }
    });

    it('should returns error when user is not found', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(null);
      try {
        await controller.login({
          email: 'm.ilham.mubarak@gmail.com',
          password: 'rpl1234',
        });
      } catch (error) {
        expect(error).toHaveProperty('response', 'User Dosent Exist');
        expect(error).toHaveProperty('status', 404);
        expect(error).toBeInstanceOf(HttpException);
      }
    });
  });
});
