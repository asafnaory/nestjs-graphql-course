import { InputType } from '@nestjs/graphql';
import {
  IsNumber,
  IsString,
  MinLength,
  IsArray,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdatePlayerInput {
  @IsNumber()
  @IsOptional()
  number: number;

  @IsString()
  @IsOptional()
  @MinLength(3)
  name: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  nickNames?: string[];
}
