/* eslint-disable prettier/prettier */
import {
    Injectable, 
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    async login(login: string, password: string): Promise<AuthEntity> {
        // Step 1: Fetch a user with the given email
        const user = await this.prisma.user.findUnique({ where: { login: login } });

        // If no user is found, throw an error
        if (!user) {
            throw new NotFoundException(`No user found for email: ${login}`);
        }

        // Step 2: Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        // Step 3: Generate a JWT containing the user's ID and return it
        return {
            accessToken: this.jwtService.sign({ userId: user.id }),
        };
    }
}