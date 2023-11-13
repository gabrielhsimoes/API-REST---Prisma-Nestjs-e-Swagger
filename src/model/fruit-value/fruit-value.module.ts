import { Module } from '@nestjs/common';
import { FruitValueService } from './fruit-value.service';
import { FruitValueController } from './fruit-value.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FruitValueController],
  providers: [FruitValueService],
  imports: [PrismaModule]
})
export class FruitValueModule {}
