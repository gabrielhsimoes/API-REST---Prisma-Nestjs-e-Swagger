import { PartialType } from '@nestjs/swagger';
import { CreateFruitValueDto } from './create-fruit-value.dto';

export class UpdateFruitValueDto extends PartialType(CreateFruitValueDto) {}
