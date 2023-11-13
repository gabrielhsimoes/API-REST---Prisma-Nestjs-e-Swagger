/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query, UseGuards } from '@nestjs/common';
import { FruitHistoryService } from './fruit-history.service';
import { CreateFruitHistoryDto } from './dto/create-fruit-history.dto';
import { UpdateFruitHistoryDto } from './dto/update-fruit-history.dto';
import { FruitHistoryEntity } from './entities/fruit-history.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fruit-history')
@ApiTags('fruit-history')
export class FruitHistoryController {
  constructor(private readonly fruitHistoryService: FruitHistoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitHistoryEntity })
  create(@Body() createFruitHistoryDto: CreateFruitHistoryDto) {
    return this.fruitHistoryService.create(createFruitHistoryDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitHistoryEntity, isArray: true })
  findAll() {
    return this.fruitHistoryService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: FruitHistoryEntity, isArray: true })
  async findOne(@Param('id') id: string) {
    const result =  this.fruitHistoryService.findOne(id);
    if(!result){
      throw new NotFoundException(`FruitClass with ${id} does not exist.`);
    }
    return result;
  }

  @Get('search')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitHistoryEntity, isArray: true, } )
  findFruitHistoryByQuery(@Query('q') query?: string){

    return this.fruitHistoryService.searchByQuery(query || '');
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitHistoryEntity })
  update(@Param('id') id: string, @Body() updateFruitHistoryDto: UpdateFruitHistoryDto) {
    return this.fruitHistoryService.update(id, updateFruitHistoryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FruitHistoryEntity })
  remove(@Param('id') id: string) {
    return this.fruitHistoryService.remove(id);
  }
}
