import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}
