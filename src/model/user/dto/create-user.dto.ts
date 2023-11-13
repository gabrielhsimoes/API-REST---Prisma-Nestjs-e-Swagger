/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CreateProfileDto } from "src/model/profile/dto/create-profile.dto";

export class CreateUserDto {

    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    description: string;

    @IsString()
    @ApiProperty()
    login: string;

    @IsString()
    @ApiProperty()
    password: string;

 //   @ApiProperty()
 //   profile: CreateProfileDto;

    @IsString()
    @ApiProperty()
    profileId: string;
}
