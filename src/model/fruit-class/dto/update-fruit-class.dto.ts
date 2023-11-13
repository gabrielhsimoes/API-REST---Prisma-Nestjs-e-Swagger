import { PartialType } from '@nestjs/swagger';
import { CreateFruitClassDto } from './create-fruit-class.dto';

export class UpdateFruitClassDto extends PartialType(CreateFruitClassDto) {}
