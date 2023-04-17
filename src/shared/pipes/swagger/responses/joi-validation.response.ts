import {
  ApiResponseMetadata,
  ApiResponseSchemaHost,
} from '@nestjs/swagger/dist/decorators/api-response.decorator';

export default {
  status: 422,
  description: 'Requisicão inválida',
  schema: {
    type: 'object',
    required: ['message', 'error', 'metadata'],
    properties: {
      message: {
        type: 'string',
        example: 'Requisição inválida',
        description: 'Mensagem do erro',
      },
      error: {
        type: 'object',
        description: 'Detalhes do erro',
        required: ['_original', 'details'],
        properties: {
          _original: {
            description: 'Objeto contendo a requisicão original',
            type: 'object',
            example: { name: '', email: '' },
          },
          details: {
            type: 'array',
            description: 'Detalhe dos campos inválidos',
            items: {
              type: 'object',
              required: ['message', 'path', 'type', 'context'],
              properties: {
                message: {
                  type: 'string',
                  description: 'Mensagem de erro no campo especificado',
                  example: '"name" é obrigatório',
                },
                path: {
                  type: 'array',
                  description: 'Campo(s) em que ocorreu o(s) erro(s)',
                  items: {
                    type: 'string',
                    example: 'name',
                  },
                },
                type: {
                  type: 'string',
                  description: 'Tipo do erro ocorrido',
                  example: 'any.required',
                },
                context: {
                  type: 'object',
                  description: 'Detalhes da localização campo',
                  required: ['label', 'key'],
                  properties: {
                    label: {
                      type: 'string',
                      description: 'Caminho absoluto do campo',
                      example: 'name',
                    },
                    key: {
                      type: 'string',
                      description: 'Nome do campo',
                      example: 'name',
                    },
                  },
                },
              },
            },
          },
        },
      },
      metadata: {
        type: 'object',
        description: 'Informações adicionais',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            example: 'body',
            description: 'Origem dos dados inválidos',
          },
        },
      },
    },
    additionalProperties: false,
  },
} as ApiResponseMetadata | ApiResponseSchemaHost;
