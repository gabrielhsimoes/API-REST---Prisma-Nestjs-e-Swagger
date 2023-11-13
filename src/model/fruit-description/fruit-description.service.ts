import { Injectable } from '@nestjs/common';
import { CreateFruitDescriptionDto } from './dto/create-fruit-description.dto';
import { UpdateFruitDescriptionDto } from './dto/update-fruit-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitDescriptionService {
  constructor(private prisma: PrismaService) { }
  create(createFruitDescriptionDto: CreateFruitDescriptionDto) {
    // eslint-disable-next-line prettier/prettier
    return this.prisma.fruitDescription.create({ data: createFruitDescriptionDto });
    
  }

  findAll() {
    return this.prisma.fruitDescription.findMany({
      include: { fruitClass: true },
    });
  }

  findOne(id: string) {
    return this.prisma.fruitDescription.findUnique({ where: { id } });
  }

  update(id: string, updateFruitDescriptionDto: UpdateFruitDescriptionDto) {
    return this.prisma.fruitDescription.update({
      where: { id },
      data: updateFruitDescriptionDto,
    });
  }

  remove(id: string) {
    return this.prisma.fruitDescription.delete({ where: { id } });
  }
}
