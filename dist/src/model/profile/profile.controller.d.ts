import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__profileClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        key: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        key: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__profileClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        key: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProfileDto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__profileClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        key: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__profileClient<{
        id: string;
        createAt: Date;
        updatedAt: Date;
        name: string;
        key: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}