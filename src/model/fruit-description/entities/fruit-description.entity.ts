/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { fruitDescription } from "@prisma/client";
import { FruitClassEntity } from "src/model/fruit-class/entities/fruit-class.entity";

export class FruitDescriptionEntity implements fruitDescription{
    @ApiProperty()
    id: string;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    description: string;

    @ApiProperty()
    fruitClass: FruitClassEntity

    @ApiProperty({ required: false, nullable: true })
    fruitClassId: string;
}
