/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateFruitValueDto {

    @IsString()
    @ApiProperty()
    description: string;

    @IsNumber()
    @ApiProperty()
    valueUnid: Decimal;

    @ApiProperty()
    @IsDateString()
    date: Date;

    @IsString()
    @ApiProperty()
    fruitDescriptionId: string;
}
