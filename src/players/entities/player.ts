import { Field, ID, Int, ObjectType,  } from '@nestjs/graphql';

@ObjectType()
export class Player {
  @Field(() => ID)
  id: string;
  @Field(() => Int)
  number: number;
  @Field(() => String)
  name: string;
  @Field(() => [String])
  nickNames: string[];
}
