import { CreateFruitClassDto } from './dto/create-fruit-class.dto';
import { UpdateFruitClassDto } from './dto/update-fruit-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FruitClassService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__fruitClassClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        fatherId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
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
