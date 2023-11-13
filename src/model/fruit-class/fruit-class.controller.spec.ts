import { Test, TestingModule } from '@nestjs/testing';
import { FruitClassController } from './fruit-class.controller';
import { FruitClassService } from './fruit-class.service';

describe('FruitClassController', () => {
  let controller: FruitClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitClassController],
      providers: [FruitClassService],
    }).compile();

    controller = module.get<FruitClassController>(FruitClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
