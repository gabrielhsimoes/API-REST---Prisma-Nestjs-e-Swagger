import { Module } from '@nestjs/common';
import { FruitHistoryService } from './fruit-history.service';
import { FruitHistoryController } from './fruit-history.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FruitHistoryController],
  providers: [FruitHistoryService],
  imports: [PrismaModule]
})
export class FruitHistoryModule {}
