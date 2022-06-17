import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { PrismaService } from '../prisma.service';
import { UserService } from './user.service';

const loggedInUser = {
  id: 'cl2anv7oj0000fwfy52i3t7ts',
  image: null,
  name: 'Muhammad Ilham Mubarak',
  email: 'm.ilham.mubarak@gmail.com',
  password: '$2b$10$Fju2/4vmPJkeNwUVeJ8Lduykk6jo/i0jeKEXpmivo06oDoeQ/09Uq',
};

const newlyCreatedUser = {
  id: 'cl4hbpipd0026e8fyv8wx2d5u',
  name: 'Aang',
  email: 'aang@gmail.com',
  emailVerified: null,
  password: '$2b$10$i9U21OfLg863VekIkt9yUen79zi0mf0SV2R6i7gAh.reLHnNilRzu',
  major: 'Informatics',
  academic_year: '2019',
  skills: 'coding',
  image: null,
  created_at: '2022-06-16T17:56:06.769Z',
  updated_at: '2022-06-16T17:56:06.730Z',
};

const userInputData = {
  email: 'aang@gmail.com',
  password: '12345',
  name: 'Aang',
  skills: 'coding',
  major: 'Informatics',
  academic_year: '2019',
};

const profileResponse = {
  id: 'cl4hbpipd0026e8fyv8wx2d5u',
  name: 'Aang',
  email: 'aang@gmail.com',
  emailVerified: null,
  major: 'Informatics',
  academic_year: '2019',
  skills: 'coding',
  image: null,
  created_at: '2022-06-16T17:56:06.769Z',
  updated_at: '2022-06-16T17:56:06.730Z',
  history: [
    {
      id: 'cl4hfftc30001fkfyasuytr4a',
      user_id: 'cl4hbpipd0026e8fyv8wx2d5u',
      name: 'Gemastik XII',
      status: 'Winner',
      role: 'Leader',
      date: '2020-12-23T12:45:00.000Z',
      created_at: '2022-06-16T19:40:32.451Z',
      updated_at: '2022-06-16T19:40:32.451Z',
    },
  ],
};

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Login', () => {
    it('should return a user when id is searched', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(loggedInUser);
      expect(
        await service.login({
          where: {
            id: 'cl2anv7oj0000fwfy52i3t7ts',
          },
        }),
      ).toBe(loggedInUser);
    });

    it('should return null when user is not found', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(null);
      expect(
        await service.login({
          where: {
            id: 'some-id',
          },
        }),
      ).toBeNull();
    });
  });

  describe('Register', () => {
    it('should return a new user', async () => {
      prisma.users.create = jest.fn().mockResolvedValueOnce(newlyCreatedUser);
      await expect(service.register({ ...userInputData })).resolves.toEqual(
        newlyCreatedUser,
      );
    });
  });

  describe('Profile', () => {
    it('should return user profile', async () => {
      prisma.users.findFirst = jest.fn().mockReturnValueOnce(profileResponse);
      const response = await service.profile({ where: { id: 'some-id' } });
      expect(response).toBe(profileResponse);
      expect(response).toHaveProperty('history');
    });
  });
});
