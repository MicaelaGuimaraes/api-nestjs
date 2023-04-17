import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ObjectSchema, Schema } from 'joi';
import { messages } from 'joi-translation-pt-br';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | Schema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value, { messages });
    if (error)
      throw new UnprocessableEntityException({
        message: 'Request Invalid.',
        error,
        metadata,
      });
    return value;
  }
}
