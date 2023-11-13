import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FruitValueService } from './fruit-value.service';
import { CreateFruitValueDto } from './dto/create-fruit-value.dto';
import { UpdateFruitValueDto } from './dto/update-fruit-value.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fruit-value')
@ApiTags('fruit-value')
export class FruitValueController {
  constructor(private readonly fruitValueService: FruitValueService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createFruitValueDto: CreateFruitValueDto) {
    return this.fruitValueService.create(createFruitValueDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.fruitValueService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.fruitValueService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateFruitValueDto: UpdateFruitValueDto) {
    return this.fruitValueService.update(id, updateFruitValueDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.fruitValueService.remove(id);
  }
}
