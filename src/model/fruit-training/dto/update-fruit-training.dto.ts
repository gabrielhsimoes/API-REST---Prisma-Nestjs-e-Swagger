import { PartialType } from '@nestjs/swagger';
import { CreateFruitTrainingDto } from './create-fruit-training.dto';

export class UpdateFruitTrainingDto extends PartialType(CreateFruitTrainingDto) {}
