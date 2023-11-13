import { Test, TestingModule } from '@nestjs/testing';
import { FruitHistoryService } from './fruit-history.service';

describe('FruitHistoryService', () => {
  let service: FruitHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitHistoryService],
    }).compile();

    service = module.get<FruitHistoryService>(FruitHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
