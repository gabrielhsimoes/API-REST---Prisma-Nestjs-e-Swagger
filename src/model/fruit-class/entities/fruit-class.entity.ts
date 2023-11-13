/* eslint-disable prettier/prettier */
import { fruitClass } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';


export class FruitClassEntity implements fruitClass{
    
    @ApiProperty()
    id:string

    @ApiProperty()
    createAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ required: false, nullable: true })
    fatherId: string;

    @ApiProperty({ required: false })
    father?: FruitClassEntity;
    
    @ApiProperty({ required: false })
    child?: FruitClassEntity[];
    //fruitDescription: fruitDescription;[]
}
