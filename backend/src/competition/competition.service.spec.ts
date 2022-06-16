import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { CompetitionService } from './competition.service';

describe('CompetitionService', () => {
  let service: CompetitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionService, PrismaService],
    }).compile();

    service = module.get<CompetitionService>(CompetitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
