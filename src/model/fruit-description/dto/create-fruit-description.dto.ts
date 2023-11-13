/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFruitDescriptionDto {


    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsString()
    @ApiProperty()
    fruitClassId: string;
}
