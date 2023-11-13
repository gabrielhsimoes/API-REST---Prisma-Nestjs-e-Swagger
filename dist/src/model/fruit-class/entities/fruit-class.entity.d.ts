import { fruitClass } from "@prisma/client";
export declare class FruitClassEntity implements fruitClass {
    id: string;
    createAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    fatherId: string;
    father?: FruitClassEntity;
    child?: FruitClassEntity[];
}
