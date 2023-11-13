import { Test, TestingModule } from '@nestjs/testing';
import { FruitValueController } from './fruit-value.controller';
import { FruitValueService } from './fruit-value.service';

describe('FruitValueController', () => {
  let controller: FruitValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitValueController],
      providers: [FruitValueService],
    }).compile();

    controller = module.get<FruitValueController>(FruitValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
