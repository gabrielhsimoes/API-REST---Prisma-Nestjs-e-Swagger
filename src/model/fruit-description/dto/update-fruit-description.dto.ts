import { PartialType } from '@nestjs/swagger';
import { CreateFruitDescriptionDto } from './create-fruit-description.dto';

export class UpdateFruitDescriptionDto extends PartialType(CreateFruitDescriptionDto) {}
