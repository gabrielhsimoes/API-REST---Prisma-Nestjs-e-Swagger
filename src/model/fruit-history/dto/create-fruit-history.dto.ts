/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";
import { Transform } from "class-transformer";
import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateFruitHistoryDto {

    // @ApiProperty()
    // createAt: Date;

    // @ApiProperty()
    // updatedAt: Date;

    @ApiProperty()
    @IsDateString()
    dateCapture: Date;

    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => value.toFixed(2))
    valuWeight: Decimal;

    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => value.toFixed(2))
    valueTotal: Decimal;

    @IsString()
    @ApiProperty()
    fruitValueId: string;
}
