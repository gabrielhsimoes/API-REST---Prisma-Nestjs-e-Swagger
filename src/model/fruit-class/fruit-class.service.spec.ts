import { Test, TestingModule } from '@nestjs/testing';
import { FruitClassService } from './fruit-class.service';

describe('FruitClassService', () => {
  let service: FruitClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitClassService],
    }).compile();

    service = module.get<FruitClassService>(FruitClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
