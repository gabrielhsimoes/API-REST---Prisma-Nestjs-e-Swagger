import { Module } from '@nestjs/common';
import { FruitDescriptionService } from './fruit-description.service';
import { FruitDescriptionController } from './fruit-description.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FruitDescriptionController],
  providers: [FruitDescriptionService],
  imports: [PrismaModule],
})
export class FruitDescriptionModule {}
