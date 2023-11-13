import { Decimal } from "@prisma/client/runtime/library";
export declare class CreateFruitValueDto {
    description: string;
    valueUnid: Decimal;
    date: Date;
    fruitDescriptionId: string;
}
