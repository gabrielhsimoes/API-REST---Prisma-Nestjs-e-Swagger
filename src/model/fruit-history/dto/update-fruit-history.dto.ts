import { PartialType } from '@nestjs/swagger';
import { CreateFruitHistoryDto } from './create-fruit-history.dto';

export class UpdateFruitHistoryDto extends PartialType(CreateFruitHistoryDto) {}
