import { fruitDescription } from "@prisma/client";
import { FruitClassEntity } from "src/model/fruit-class/entities/fruit-class.entity";
export declare class FruitDescriptionEntity implements fruitDescription {
    id: string;
    createAt: Date;
    updatedAt: Date;
    description: string;
    fruitClass: FruitClassEntity;
    fruitClassId: string;
}
