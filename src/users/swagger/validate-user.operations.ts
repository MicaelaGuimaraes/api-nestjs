import j2s from 'joi-to-swagger';
import { CreateUsersValidator } from '../validators/create-users.validator';
import { ApiOperationOptions } from '@nestjs/swagger';

const { swagger: CreateUserSwaggerScheme } = j2s(CreateUsersValidator);
export default {
  summary: 'Api nestjs template',
  description: 'Api for example',
  requestBody: {
    content: { 'application/json': { scheme: CreateUserSwaggerScheme } },
  },
} as ApiOperationOptions;
