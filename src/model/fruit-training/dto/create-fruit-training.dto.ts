/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDateString } from "class-validator";

export class CreateFruitTrainingDto {
    
    @IsString()
    @ApiProperty()
    img: string;

    @ApiProperty()
    @IsDateString()
    date: Date;

    @IsString()
    @ApiProperty()
    fruitClassId: string;
}
