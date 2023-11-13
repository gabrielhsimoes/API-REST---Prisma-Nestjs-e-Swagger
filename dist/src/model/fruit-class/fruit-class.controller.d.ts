import { FruitClassService } from './fruit-class.service';
import { CreateFruitClassDto } from './dto/create-fruit-class.dto';
import { UpdateFruitClassDto } from './dto/update-fruit-class.dto';
export declare class FruitClassController {
    private readonly fruitClassService;
    constructor(fruitClassService: FruitClassService);
    create(createFruitClassDto: CreateFruitClassDto): import(".prisma/client").Prisma.Prisma__fruitClassClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        fatherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        father: {
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
        name: string;
        description: string;
        fatherId: string;
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        fatherId: string;
    }>;
    update(id: string, updateFruitClassDto: UpdateFruitClassDto): import(".prisma/client").Prisma.Prisma__fruitClassClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        fatherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__fruitClassClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        fatherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
