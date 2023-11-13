/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { fruitTraining } from "@prisma/client";
import { FruitClassEntity } from "src/model/fruit-class/entities/fruit-class.entity";

export class FruitTrainingEntity implements fruitTraining {

    @ApiProperty()
    id: string;

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    img: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    fruitClass: FruitClassEntity

    @ApiProperty({ required: false, nullable: true })
    fruitClassId: string;
}
