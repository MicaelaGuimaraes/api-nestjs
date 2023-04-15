import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'src/typeorm/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { ListUsersDto } from './dto/list-users-dto';

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getAllUser(): Promise<ListUsersDto[]> {
    return await this.usersRepository.find({
      select: { id: true, name: true },
    });
  }

  async getUser(id: number): Promise<ListUsersDto[]> {
    return await this.usersRepository.find({
      select: { name: true },
      where: { id: id },
    });
  }

  async post(usersDto: CreateUsersDto) {
    return await this.usersRepository.save(
      this.usersRepository.create(usersDto),
    );
  }

  async updateName(id: number, name: string) {
    return this.usersRepository
      .createQueryBuilder()
      .update()
      .set({ name: name })
      .where('id = :id', { id })
      .execute();
  }

  async updatePassword(id: number, newPassword: string) {
    return this.usersRepository
      .createQueryBuilder()
      .update()
      .set({ password: newPassword })
      .where('id = :id', { id })
      .execute();
  }
}
