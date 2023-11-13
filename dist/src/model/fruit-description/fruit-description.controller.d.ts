import { FruitDescriptionService } from './fruit-description.service';
import { CreateFruitDescriptionDto } from './dto/create-fruit-description.dto';
import { UpdateFruitDescriptionDto } from './dto/update-fruit-description.dto';
export declare class FruitDescriptionController {
    private readonly fruitDescriptionService;
    constructor(fruitDescriptionService: FruitDescriptionService);
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
    findOne(id: string): Promise<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        description: string;
        fruitClassId: string;
    }>;
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
