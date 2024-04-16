import {
  IsNumber,
  IsString,
  MinLength,
  IsArray,
  IsOptional,
} from 'class-validator';
import * as GraphQLTypes from '../../graphql';

export class UpdatePlayerInput extends GraphQLTypes.UpdatePlayerInput {
  @IsNumber()
  @IsOptional()
  override number: number;

  @IsString()
  @IsOptional()
  @MinLength(3)
  override name: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  override nickNames?: string[];
}
