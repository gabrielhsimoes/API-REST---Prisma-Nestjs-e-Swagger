import { CreateFruitDescriptionDto } from './dto/create-fruit-description.dto';
import { UpdateFruitDescriptionDto } from './dto/update-fruit-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FruitDescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFruitDescriptionDto: CreateFruitDescriptionDto): import(".prisma/client").Prisma.Prisma__fruitDescriptionClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        fruitClassId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__fruitDescriptionClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        fruitClassId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateFruitDescriptionDto: UpdateFruitDescriptionDto): import(".prisma/client").Prisma.Prisma__fruitDescriptionClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        fruitClassId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__fruitDescriptionClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        fruitClassId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
