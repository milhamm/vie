import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import {
  ALL_TEAMS,
  GEMASTIK_EXPECTED_RESPONSE,
  GEMASTIK_RESPONSE,
} from './tests/team.test.contants';

describe('TeamController', () => {
  let controller: TeamController;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamController],
      providers: [TeamService, PrismaService],
    }).compile();

    controller = module.get<TeamController>(TeamController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should show all teams', async () => {
    prisma.team.findMany = jest.fn().mockReturnValueOnce(ALL_TEAMS);
    expect(await controller.showTeam({})).toBe(ALL_TEAMS);
  });

  it('should show detail team successfully', async () => {
    const expected = { ...GEMASTIK_EXPECTED_RESPONSE, join_status: 0 };
    prisma.team.findUnique = jest.fn().mockReturnValueOnce(GEMASTIK_RESPONSE);
    expect(await controller.detailTeam('some-id', null)).toStrictEqual(
      expected,
    );
  });

  it('should show error 404 when detail team id is not found', async () => {
    prisma.team.findUnique = jest.fn().mockReturnValueOnce(null);
    try {
      await controller.detailTeam('some-id', null);
    } catch (error) {
      expect(error.response).toHaveProperty('message', 'Not Found');
      expect(error.response).toHaveProperty('statusCode', 404);
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
