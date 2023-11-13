import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findAll(): Promise<({
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
    findOne(id: string): Promise<UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    remove(id: string): Promise<UserEntity>;
}
