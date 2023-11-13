import { Injectable } from '@nestjs/common';
import { CreateFruitClassDto } from './dto/create-fruit-class.dto';
import { UpdateFruitClassDto } from './dto/update-fruit-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitClassService {
  constructor(private prisma: PrismaService) { }
  create(createFruitClassDto: CreateFruitClassDto) {
    return this.prisma.fruitClass.create({ data: createFruitClassDto });
  }

  findAll() {
    return this.prisma.fruitClass.findMany({
      include: {
        father: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.fruitClass.findUnique({ where: { id } });
  }

  update(id: string, updateFruitClassDto: UpdateFruitClassDto) {
    return this.prisma.fruitClass.update({
      where: { id },
      data: updateFruitClassDto,
    });
  }

  remove(id: string) {
    return this.prisma.fruitClass.delete({ where: { id } });
  }
}
