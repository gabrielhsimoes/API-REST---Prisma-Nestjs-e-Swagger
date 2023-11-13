/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { FruitClassService } from './fruit-class.service';
import { CreateFruitClassDto } from './dto/create-fruit-class.dto';
import { UpdateFruitClassDto } from './dto/update-fruit-class.dto';
import { FruitClassEntity } from './entities/fruit-class.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fruit-class')
@ApiTags('fruit-class')
export class FruitClassController {
  constructor(private readonly fruitClassService: FruitClassService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitClassEntity })
  create(@Body() createFruitClassDto: CreateFruitClassDto) {
    return this.fruitClassService.create(createFruitClassDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitClassEntity, isArray: true })
  findAll() {
    return this.fruitClassService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitClassEntity })
  async findOne(@Param('id') id: string) {
    const result =  this.fruitClassService.findOne(id);
    if(!result){
      throw new NotFoundException(`FruitClass with ${id} does not exist.`);
    }
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitClassEntity })
  update(@Param('id') id: string, @Body() updateFruitClassDto: UpdateFruitClassDto) {
    return this.fruitClassService.update(id, updateFruitClassDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitClassEntity })
  remove(@Param('id') id: string) {
    return this.fruitClassService.remove(id);
  }
}
