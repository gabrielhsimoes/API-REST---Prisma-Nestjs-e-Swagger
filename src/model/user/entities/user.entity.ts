import { ApiProperty } from "@nestjs/swagger";
import { user } from "@prisma/client";
import { ProfileEntity } from "src/model/profile/entities/profile.entity";
import { Exclude } from 'class-transformer';

export class UserEntity implements user {

  constructor({ profile, ...data }: Partial<UserEntity>) {
    Object.assign(this, data);

    if (profile) {
      this.profile = new ProfileEntity(profile);
    }

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
  description: string;

  @ApiProperty()
  login: string;

  @Exclude()
  //@ApiProperty()
  password: string;

  @ApiProperty()
  profile: ProfileEntity;

  @ApiProperty({ required: false, nullable: true })
  profileId: string;
}
