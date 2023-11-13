import { CreateFruitHistoryDto } from './dto/create-fruit-history.dto';
import { UpdateFruitHistoryDto } from './dto/update-fruit-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FruitHistoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFruitHistoryDto: CreateFruitHistoryDto): import(".prisma/client").Prisma.Prisma__fruitHistoryClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        fruitValue: {
            fruitDescription: {
                fruitClass: {
                    id: string;
                    createAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string;
                    fatherId: string;
                };
            } & {
                id: string;
                createAt: Date;
                updatedAt: Date;
                description: string;
                fruitClassId: string;
            };
        } & {
            id: string;
            createAt: Date;
            updatedAt: Date;
            description: string;
            valueUnid: import("@prisma/client/runtime/library").Decimal;
            date: Date;
            fruitDescriptionId: string;
        };
    } & {
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__fruitHistoryClient<{
        fruitValue: {
            fruitDescription: {
                fruitClass: {
                    id: string;
                    createAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string;
                    fatherId: string;
                };
            } & {
                id: string;
                createAt: Date;
                updatedAt: Date;
                description: string;
                fruitClassId: string;
            };
        } & {
            id: string;
            createAt: Date;
            updatedAt: Date;
            description: string;
            valueUnid: import("@prisma/client/runtime/library").Decimal;
            date: Date;
            fruitDescriptionId: string;
        };
    } & {
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateFruitHistoryDto: UpdateFruitHistoryDto): import(".prisma/client").Prisma.Prisma__fruitHistoryClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__fruitHistoryClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    searchByQuery(query: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        dateCapture: Date;
        valuWeight: import("@prisma/client/runtime/library").Decimal;
        valueTotal: import("@prisma/client/runtime/library").Decimal;
        fruitValueId: string;
    }[]>;
}
