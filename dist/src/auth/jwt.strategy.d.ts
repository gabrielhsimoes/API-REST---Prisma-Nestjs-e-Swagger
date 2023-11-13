import { Strategy } from 'passport-jwt';
import { UserService } from 'src/model/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: {
        userId: string;
    }): Promise<{
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
}
export {};
