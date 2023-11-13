/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FruitClassModule } from './model/fruit-class/fruit-class.module';
import { UserModule } from './model/user/user.module';
import { ProfileModule } from './model/profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { FruitHistoryModule } from './model/fruit-history/fruit-history.module';
import { FruitValueModule } from './model/fruit-value/fruit-value.module';
import { FruitDescriptionModule } from './model/fruit-description/fruit-description.module';
import { FruitTrainingModule } from './model/fruit-training/fruit-training.module';

@Module({
  imports: [PrismaModule, FruitClassModule, UserModule, ProfileModule, AuthModule, FruitHistoryModule, FruitValueModule, FruitDescriptionModule, FruitTrainingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
