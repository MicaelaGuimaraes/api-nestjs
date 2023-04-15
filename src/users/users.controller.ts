import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import UsersService from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAllUser();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUser(+id);
  }

  @Post()
  postUsers(@Body() usersDto: CreateUsersDto) {
    return this.usersService.post(usersDto);
  }

  @Put('updateName/:id')
  upateNameUser(@Param('id') id: number, @Body() body: { name: string }) {
    return this.usersService.updateName(id, body.name);
  }

  @Put('updatePassword/:id')
  updatePassword(
    @Param('id') id: number,
    @Body() body: { newPassword: string },
  ) {
    return this.usersService.updatePassword(id, body.newPassword);
  }
}
