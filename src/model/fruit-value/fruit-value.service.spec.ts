import { Test, TestingModule } from '@nestjs/testing';
import { FruitValueService } from './fruit-value.service';

describe('FruitValueService', () => {
  let service: FruitValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitValueService],
    }).compile();

    service = module.get<FruitValueService>(FruitValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
