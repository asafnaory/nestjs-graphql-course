import { InputType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString, MinLength } from 'class-validator';

@InputType()
export class CreatePlayerInput {
  @IsNumber()
  number: number;

  @IsString()
  @MinLength(3)
  name: string;

  @IsArray()
  @IsString({ each: true })
  nickNames?: string[];
}
