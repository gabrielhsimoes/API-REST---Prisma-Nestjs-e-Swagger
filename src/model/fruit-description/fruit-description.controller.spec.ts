import { Test, TestingModule } from '@nestjs/testing';
import { FruitDescriptionController } from './fruit-description.controller';
import { FruitDescriptionService } from './fruit-description.service';

describe('FruitDescriptionController', () => {
  let controller: FruitDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitDescriptionController],
      providers: [FruitDescriptionService],
    }).compile();

    controller = module.get<FruitDescriptionController>(FruitDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
