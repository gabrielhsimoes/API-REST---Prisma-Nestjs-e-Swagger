import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProfileDto {
    @ApiProperty()
    createAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    key: string;

}
