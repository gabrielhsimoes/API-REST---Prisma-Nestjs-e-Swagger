import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FruitTrainingService } from './fruit-training.service';
import { CreateFruitTrainingDto } from './dto/create-fruit-training.dto';
import { UpdateFruitTrainingDto } from './dto/update-fruit-training.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { FruitTrainingEntity } from './entities/fruit-training.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fruit-training')
@ApiTags('fruit-training')
export class FruitTrainingController {
  constructor(private readonly fruitTrainingService: FruitTrainingService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitTrainingEntity})
  create(@Body() createFruitTrainingDto: CreateFruitTrainingDto) {
    return this.fruitTrainingService.create(createFruitTrainingDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitTrainingEntity, isArray: true})
  findAll() {
    return this.fruitTrainingService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitTrainingEntity})
  findOne(@Param('id') id: string) {
    return this.fruitTrainingService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitTrainingEntity})
  update(@Param('id') id: string, @Body() updateFruitTrainingDto: UpdateFruitTrainingDto) {
    return this.fruitTrainingService.update(id, updateFruitTrainingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitTrainingEntity})
  remove(@Param('id') id: string) {
    return this.fruitTrainingService.remove(id);
  }
}
