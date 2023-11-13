import { ApiProperty } from "@nestjs/swagger";
import { profile } from "@prisma/client";

export class ProfileEntity implements profile {

    constructor(data: Partial<ProfileEntity>) {
        Object.assign(this, data);
      }

    @ApiProperty()
    id: string;
    @ApiProperty()
    createAt: Date;
    @ApiProperty()
    updatedAt: Date;
    @ApiProperty()
    name: string;
    @ApiProperty()
    key: string;


}
