import { Test, TestingModule } from '@nestjs/testing';
import { FruitHistoryController } from './fruit-history.controller';
import { FruitHistoryService } from './fruit-history.service';

describe('FruitHistoryController', () => {
  let controller: FruitHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitHistoryController],
      providers: [FruitHistoryService],
    }).compile();

    controller = module.get<FruitHistoryController>(FruitHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
