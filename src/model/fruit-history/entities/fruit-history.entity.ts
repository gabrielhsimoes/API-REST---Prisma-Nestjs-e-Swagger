/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { fruitHistory } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { FruitValueEntity } from "src/model/fruit-value/entities/fruit-value.entity";

export class FruitHistoryEntity implements fruitHistory {
    @ApiProperty()
    id: string;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    dateCapture: Date;

    @ApiProperty()
    valuWeight: Decimal;

    @ApiProperty()
    valueTotal: Decimal;

    @ApiProperty()
    fruitValue: FruitValueEntity 

    @ApiProperty({ required: false, nullable: true })
    fruitValueId: string;

}
