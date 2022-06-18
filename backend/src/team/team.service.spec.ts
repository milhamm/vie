import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { TeamService } from './team.service';
import {
  ALL_TEAMS,
  GEMASTIK_EXPECTED_RESPONSE,
  GEMASTIK_RESPONSE,
} from './tests/team.test.contants';

describe('TeamService', () => {
  let service: TeamService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamService, PrismaService],
    }).compile();

    service = module.get<TeamService>(TeamService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should show all teams', async () => {
    prisma.team.findMany = jest.fn().mockReturnValueOnce(ALL_TEAMS);
    expect(await service.showTeam()).toBe(ALL_TEAMS);
  });

  it('should show detail team with join status of 0 if not logged in', async () => {
    const expected = { ...GEMASTIK_EXPECTED_RESPONSE, join_status: 0 };
    prisma.team.findUnique = jest.fn().mockReturnValueOnce(GEMASTIK_RESPONSE);
    const response = await service.detailTeam('some-id', null);
    expect(response).toStrictEqual(expected);
    expect(response).toHaveProperty('join_status', 0);
  });

  it('should show detail team with join status of 1 if logged in and requesting', async () => {
    const expected = { ...GEMASTIK_EXPECTED_RESPONSE, join_status: 1 };
    prisma.team.findUnique = jest.fn().mockReturnValueOnce(GEMASTIK_RESPONSE);
    const response = await service.detailTeam('some-id', {
      user: { id: 'cl2anv7oj0000fwfy52i3t7ts' },
    });
    expect(response).toStrictEqual(expected);
    expect(response).toHaveProperty('join_status', 1);
  });

  it('should show detail team with join status of 2 if logged in as the owner', async () => {
    const expected = { ...GEMASTIK_EXPECTED_RESPONSE, join_status: 2 };
    prisma.team.findUnique = jest.fn().mockReturnValueOnce(GEMASTIK_RESPONSE);
    const response = await service.detailTeam('some-id', {
      user: { id: 'cl4hbpipd0026e8fyv8wx2d5u' },
    });
    expect(response).toStrictEqual(expected);
    expect(response).toHaveProperty('join_status', 2);
  });

  it('should create teams', async () => {
    prisma.team.create = jest.fn().mockReturnValueOnce(GEMASTIK_RESPONSE);
    expect(
      await service.createTeam(
        {
          color_code: '#fde900',
          max_member: 3,
          roles_offered: 'Beban',
          team_name: 'SSATeam',
        },
        'some_user_id',
      ),
    ).toBe(GEMASTIK_RESPONSE);
  });
});
