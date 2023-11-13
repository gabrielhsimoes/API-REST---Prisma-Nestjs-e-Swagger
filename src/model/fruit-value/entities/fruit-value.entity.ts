/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { fruitValue } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { FruitDescriptionEntity } from "src/model/fruit-description/entities/fruit-description.entity";

export class FruitValueEntity implements fruitValue {
    
    @ApiProperty()
    id: string;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    description: string;

    @ApiProperty()
    valueUnid: Decimal;
    
    @ApiProperty()
    date: Date;

    @ApiProperty()
    fruitDescription: FruitDescriptionEntity

    @ApiProperty({ required: false, nullable: true})
    fruitDescriptionId: string;

}
