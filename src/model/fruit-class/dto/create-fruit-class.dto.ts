/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty  } from 'class-validator';
export class CreateFruitClassDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    
    @IsString()
    @ApiProperty()
    description: string;
    //    @ApiProperty({ required: false })
    //    father?: CreateFruitClassDto;
    //    @ApiProperty({ required: false })
    //    child?: CreateFruitClassDto[];
    //fruitDescription: fruitDescription;[]
}
