import { fruitHistory } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { FruitValueEntity } from "src/model/fruit-value/entities/fruit-value.entity";
export declare class FruitHistoryEntity implements fruitHistory {
    id: string;
    createAt: Date;
    updatedAt: Date;
    dateCapture: Date;
    valuWeight: Decimal;
    valueTotal: Decimal;
    fruitValue: FruitValueEntity;
    fruitValueId: string;
}
