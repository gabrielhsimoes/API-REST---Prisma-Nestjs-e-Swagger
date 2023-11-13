/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateFruitValueDto } from './dto/create-fruit-value.dto';
import { UpdateFruitValueDto } from './dto/update-fruit-value.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitValueService {
  constructor(private prisma: PrismaService){ }
  create(createFruitValueDto: CreateFruitValueDto) {
    return this.prisma.fruitValue.create({ data: createFruitValueDto});
  }

  findAll() {
    return this.prisma.fruitValue.findMany({
      include: { fruitDescription: {
        include: {
          fruitClass: true
        }
      } },
    });
  }

  findOne(id: string) {
    return this.prisma.fruitValue.findUnique({ where: { id } });
  }

  update(id: string, updateFruitValueDto: UpdateFruitValueDto) {
    return this.prisma.fruitValue.update({
      where: { id },
      data: updateFruitValueDto,
    });
  }

  remove(id: string) {
    return this.prisma.fruitValue.delete({ where: { id } });
  }
}
