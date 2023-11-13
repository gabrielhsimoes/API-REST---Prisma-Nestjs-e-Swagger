/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFruitTrainingDto } from './dto/create-fruit-training.dto';
import { UpdateFruitTrainingDto } from './dto/update-fruit-training.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitTrainingService {

  constructor(private prisma: PrismaService){}

  create(createFruitTrainingDto: CreateFruitTrainingDto) {
    return this.prisma.fruitTraining.create({ data: createFruitTrainingDto })
  }

  findAll() {
    //return `This action returns all fruitTraining`;
    return this.prisma.fruitTraining.findMany({ include: { fruitClass: true }});
    
  }

  findOne(id: string) {
    return this.prisma.fruitTraining.findUnique({ where: { id } });
  }

  update(id: string, updateFruitTrainingDto: UpdateFruitTrainingDto) {
    return this.prisma.fruitTraining.update({
      where: { id },
      data: updateFruitTrainingDto,
    });
  }

  remove(id: string) {
    return this.prisma.fruitTraining.delete({ where: { id } });
  }
}
