import { Test, TestingModule } from '@nestjs/testing';
import { FruitDescriptionService } from './fruit-description.service';

describe('FruitDescriptionService', () => {
  let service: FruitDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitDescriptionService],
    }).compile();

    service = module.get<FruitDescriptionService>(FruitDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
