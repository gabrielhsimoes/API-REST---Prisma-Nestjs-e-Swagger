/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateFruitHistoryDto } from './dto/create-fruit-history.dto';
import { UpdateFruitHistoryDto } from './dto/update-fruit-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FruitHistoryService {
  constructor(private prisma: PrismaService) {}
  create(createFruitHistoryDto: CreateFruitHistoryDto) {
    return this.prisma.fruitHistory.create({ data: createFruitHistoryDto });
  }

  findAll() {
    return this.prisma.fruitHistory.findMany({
       include: {
        fruitValue: {
          include: {
            fruitDescription: {
              include: {
                fruitClass: true,
              },
            },
          },
          
        },
      },
      
    });
  }

  findOne(id: string) {
    return this.prisma.fruitHistory.findUnique({
      where: { id },
      include: {
        fruitValue: {
          include: {
            fruitDescription: {
              include: {
                fruitClass: true,
              },
            },
          },
        },
      },
    });
  }

  update(id: string, updateFruitHistoryDto: UpdateFruitHistoryDto) {
    return this.prisma.fruitHistory.update({
      where: { id },
      data: updateFruitHistoryDto,
    });
  }

  remove(id: string) {
    return this.prisma.fruitHistory.delete({ where: { id } });
  }

  searchByQuery(query: string){
    console.log(`Procurando query: ${query}`);
    return this.prisma.fruitHistory.findMany({
      where: {
        OR: [
          {
            id: {
              contains: query
            },
            fruitValue: {
              fruitDescription: {
                description: {
                  contains: query,
                },
                fruitClass: {
                  name: {
                    contains: query,
                  }
                }
              }
            }
          }
        ]
        
      },
      
    })
  }
}
