import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { LabsService } from './labs.service';

describe('LabsService', () => {
  let service: LabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabsService, PrismaService, UserService],
    }).compile();

    service = module.get<LabsService>(LabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
