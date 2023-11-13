import { fruitValue } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { FruitDescriptionEntity } from "src/model/fruit-description/entities/fruit-description.entity";
export declare class FruitValueEntity implements fruitValue {
    id: string;
    createAt: Date;
    updatedAt: Date;
    description: string;
    valueUnid: Decimal;
    date: Date;
    fruitDescription: FruitDescriptionEntity;
    fruitDescriptionId: string;
}
