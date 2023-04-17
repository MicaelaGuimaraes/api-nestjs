import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import UsersService from './users.service';
import { JoiValidationPipe } from 'src/shared/pipes/joi-validation.pipe';
import { CreateUsersValidator } from './validators/create-users.validator';
import { CreateUsersDto } from './dto/create-users.dto';
import { ApiResponses } from 'src/shared/pipes/swagger/decorators/api-responses.decorator';
import validateUserResponses from './swagger/validate-user.responses';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    return await this.usersService.getAllUser();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUser(+id);
  }

  @Post()
  // @ApiOperation(validateUserOperations)
  @ApiResponses(validateUserResponses)
  async postUsers(
    @Body(new JoiValidationPipe(CreateUsersValidator)) usersDto: CreateUsersDto,
  ) {
    return await this.usersService.post(usersDto);
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
