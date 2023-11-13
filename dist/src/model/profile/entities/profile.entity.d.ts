import { profile } from "@prisma/client";
export declare class ProfileEntity implements profile {
    constructor(data: Partial<ProfileEntity>);
    id: string;
    createAt: Date;
    updatedAt: Date;
    name: string;
    key: string;
}
