import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { TeamService } from './team.service';

const teams = [
  {
    id: 'cl2akkv2n0001osfyci8ga5az',
    competition_id: 'gemastik',
    leader_id: null,
    team_name: 'SSATeam',
    max_member: 3,
    roles_offered: 'Beban',
    color_code: '#fde900',
    created_at: '2022-04-22T15:10:38.159Z',
    updated_at: '2022-04-22T15:10:38.159Z',
    competition: {
      id: 'gemastik',
      name: 'gemastik',
      organizer: 'telu',
      description: 'anjoi',
      guidebookk: null,
      category: 'cp',
      created_at: '2022-04-22T22:09:24.000Z',
      updated_at: '2022-04-22T22:09:24.000Z',
    },
  },
  {
    id: 'cl2ao0ufe0016t0fyswabvmvn',
    competition_id: 'gemastik',
    leader_id: null,
    team_name: 'SSATeam',
    max_member: 3,
    roles_offered: 'Beban',
    color_code: '#fde900',
    created_at: '2022-04-22T16:47:02.666Z',
    updated_at: '2022-04-22T16:47:02.666Z',
    competition: {
      id: 'gemastik',
      name: 'gemastik',
      organizer: 'telu',
      description: 'anjoi',
      guidebookk: null,
      category: 'cp',
      created_at: '2022-04-22T22:09:24.000Z',
      updated_at: '2022-04-22T22:09:24.000Z',
    },
  },
];

const gemastik = {
  id: 'cl2akkv2n0001osfyci8ga5az',
  competition_id: 'gemastik',
  leader_id: null,
  team_name: 'SSATeam',
  max_member: 3,
  roles_offered: 'Beban',
  color_code: '#fde900',
  created_at: '2022-04-22T15:10:38.159Z',
  updated_at: '2022-04-22T15:10:38.159Z',
  competition: {
    id: 'gemastik',
    name: 'gemastik',
    organizer: 'telu',
    description: 'anjoi',
    guidebookk: null,
    category: 'cp',
    created_at: '2022-04-22T22:09:24.000Z',
    updated_at: '2022-04-22T22:09:24.000Z',
  },
};

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

  it('should show teams', async () => {
    prisma.team.findMany = jest.fn().mockReturnValueOnce(teams);
    expect(await service.showTeam({})).toBe(teams);
  });

  it('should create teams', async () => {
    prisma.team.create = jest.fn().mockReturnValueOnce(gemastik);
    expect(
      await service.createTeam({
        color_code: '#fde900',
        max_member: 3,
        roles_offered: 'Beban',
        team_name: 'SSATeam',
      }),
    ).toBe(gemastik);
  });
});
