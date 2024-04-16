import { IsArray, IsNumber, IsString, MinLength } from 'class-validator';
import * as GraphQLTypes from '../../graphql';

export class CreatePlayerInput extends GraphQLTypes.CreatePlayerInput {
  @IsNumber()
  override number: number;

  @IsString()
  @MinLength(3)
  override name: string;

  @IsArray()
  @IsString({ each: true })
  override nickNames?: string[];
}
