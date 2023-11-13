import { FruitTrainingService } from './fruit-training.service';
import { CreateFruitTrainingDto } from './dto/create-fruit-training.dto';
import { UpdateFruitTrainingDto } from './dto/update-fruit-training.dto';
export declare class FruitTrainingController {
    private readonly fruitTrainingService;
    constructor(fruitTrainingService: FruitTrainingService);
    create(createFruitTrainingDto: CreateFruitTrainingDto): import(".prisma/client").Prisma.Prisma__fruitTrainingClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        img: string;
        date: Date;
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
        img: string;
        date: Date;
        fruitClassId: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__fruitTrainingClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        img: string;
        date: Date;
        fruitClassId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateFruitTrainingDto: UpdateFruitTrainingDto): import(".prisma/client").Prisma.Prisma__fruitTrainingClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        img: string;
        date: Date;
        fruitClassId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__fruitTrainingClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        img: string;
        date: Date;
        fruitClassId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
