import { CreateFruitValueDto } from './dto/create-fruit-value.dto';
import { UpdateFruitValueDto } from './dto/update-fruit-value.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FruitValueService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFruitValueDto: CreateFruitValueDto): import(".prisma/client").Prisma.Prisma__fruitValueClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        valueUnid: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        fruitDescriptionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__fruitValueClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        valueUnid: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        fruitDescriptionId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateFruitValueDto: UpdateFruitValueDto): import(".prisma/client").Prisma.Prisma__fruitValueClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        valueUnid: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        fruitDescriptionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__fruitValueClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        valueUnid: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        fruitDescriptionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
