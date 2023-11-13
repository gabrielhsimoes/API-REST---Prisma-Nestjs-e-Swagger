/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { FruitDescriptionService } from './fruit-description.service';
import { CreateFruitDescriptionDto } from './dto/create-fruit-description.dto';
import { UpdateFruitDescriptionDto } from './dto/update-fruit-description.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FruitDescriptionEntity } from './entities/fruit-description.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fruit-description')
@ApiTags('fruit-description')
export class FruitDescriptionController {
  constructor(private readonly fruitDescriptionService: FruitDescriptionService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Criado com sucesso.'})
  @ApiResponse({ status: 400, description: 'Campos obrigatórios precisam ser preenchidos.'})
  @ApiResponse({ status: 500, description: 'Dados foram inseridos incorretamente ou não existe relacionamento.'})
  @ApiCreatedResponse({ type: FruitDescriptionEntity})
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createFruitDescriptionDto: CreateFruitDescriptionDto) {
    return this.fruitDescriptionService.create(createFruitDescriptionDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitDescriptionEntity, isArray: true })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.fruitDescriptionService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitDescriptionEntity })
  async findOne(@Param('id') id: string) {
    const result =  this.fruitDescriptionService.findOne(id);
    if(!result){
      throw new NotFoundException(`FruitClass with ${id} does not exist.`);
    }
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitDescriptionEntity })
  update(@Param('id') id: string, @Body() updateFruitDescriptionDto: UpdateFruitDescriptionDto) {
    return this.fruitDescriptionService.update(id, updateFruitDescriptionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitDescriptionEntity })
  remove(@Param('id') id: string) {
    return this.fruitDescriptionService.remove(id);
  }
}
