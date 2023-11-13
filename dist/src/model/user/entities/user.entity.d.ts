import { user } from "@prisma/client";
import { ProfileEntity } from "src/model/profile/entities/profile.entity";
export declare class UserEntity implements user {
    constructor({ profile, ...data }: Partial<UserEntity>);
    id: string;
    createAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    login: string;
    password: string;
    profile: ProfileEntity;
    profileId: string;
}
