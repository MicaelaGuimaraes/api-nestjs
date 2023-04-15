import { IsString, Min } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  name: string;

  @IsString()
  @Min(6)
  password: string;
}
