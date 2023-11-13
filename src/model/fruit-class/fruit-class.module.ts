import { Module } from '@nestjs/common';
import { FruitClassService } from './fruit-class.service';
import { FruitClassController } from './fruit-class.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FruitClassController],
  providers: [FruitClassService],
  imports: [PrismaModule],
})
export class FruitClassModule {}
