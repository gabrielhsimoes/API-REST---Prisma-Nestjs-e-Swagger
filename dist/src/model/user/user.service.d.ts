import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare const roundsOfHashing = 10;
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        login: string;
        password: string;
        profileId: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        profile: {
            id: string;
            createAt: Date;
            updatedAt: Date;
            name: string;
            key: string;
        };
    } & {
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        login: string;
        password: string;
        profileId: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__userClient<{
        profile: {
            id: string;
            createAt: Date;
            updatedAt: Date;
            name: string;
            key: string;
        };
    } & {
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        login: string;
        password: string;
        profileId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        profile: {
            id: string;
            createAt: Date;
            updatedAt: Date;
            name: string;
            key: string;
        };
    } & {
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        login: string;
        password: string;
        profileId: string;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__userClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        login: string;
        password: string;
        profileId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
