import { Test, TestingModule } from '@nestjs/testing';
import { FruitTrainingService } from './fruit-training.service';

describe('FruitTrainingService', () => {
  let service: FruitTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitTrainingService],
    }).compile();

    service = module.get<FruitTrainingService>(FruitTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
