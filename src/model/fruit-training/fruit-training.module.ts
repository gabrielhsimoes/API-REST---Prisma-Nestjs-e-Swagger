import { Module } from '@nestjs/common';
import { FruitTrainingService } from './fruit-training.service';
import { FruitTrainingController } from './fruit-training.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FruitTrainingController],
  providers: [FruitTrainingService],
  imports: [PrismaModule],
})
export class FruitTrainingModule {}
