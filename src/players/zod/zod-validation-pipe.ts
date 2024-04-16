import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';
import { ZodObject } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      console.log(metadata);
      this.schema.strict().parse(value);
      // this.schema.passthrough().parse(value);
    } catch (error) {
      throw new UserInputError('Validation failed' + fromZodError(error));
    }
    return value;
  }
}
