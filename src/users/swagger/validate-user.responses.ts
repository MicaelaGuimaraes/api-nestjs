import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import joiValidationResponse from 'src/shared/pipes/swagger/responses/joi-validation.response';

export default [
  {
    status: 201,
    description: 'Sucesso',
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: '',
        },
        password: {
          type: 'string',
          example: '',
        },
      },
    },
  },

  joiValidationResponse,
] as ApiResponseOptions[];
