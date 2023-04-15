import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTDATABASE,
      port: parseInt(process.env.PORTDATABASE),
      username: process.env.USERNAMEDATABASE,
      password: process.env.PASSWORDDATABASE,
      database: process.env.DATABASE,
      entities: [process.env.ENTITIES],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// {
//   type: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   username: 'root',
//   password: '123456',
//   database: 'nest-js-api-mysql',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: false,
// }
