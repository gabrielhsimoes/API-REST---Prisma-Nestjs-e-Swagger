import { Decimal } from "@prisma/client/runtime/library";
export declare class CreateFruitHistoryDto {
    dateCapture: Date;
    valuWeight: Decimal;
    valueTotal: Decimal;
    fruitValueId: string;
}
