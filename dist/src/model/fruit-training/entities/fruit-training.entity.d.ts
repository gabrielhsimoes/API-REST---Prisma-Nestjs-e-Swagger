import { fruitTraining } from "@prisma/client";
import { FruitClassEntity } from "src/model/fruit-class/entities/fruit-class.entity";
export declare class FruitTrainingEntity implements fruitTraining {
    id: string;
    createAt: Date;
    updatedAt: Date;
    img: string;
    date: Date;
    fruitClass: FruitClassEntity;
    fruitClassId: string;
}
