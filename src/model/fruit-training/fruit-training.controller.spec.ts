import { Test, TestingModule } from '@nestjs/testing';
import { FruitTrainingController } from './fruit-training.controller';
import { FruitTrainingService } from './fruit-training.service';

describe('FruitTrainingController', () => {
  let controller: FruitTrainingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitTrainingController],
      providers: [FruitTrainingService],
    }).compile();

    controller = module.get<FruitTrainingController>(FruitTrainingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
