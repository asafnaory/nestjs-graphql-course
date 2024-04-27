import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as GraphQLTypes from 'src/graphql';

@Resolver('AthleteResult')
export class AthletesResolver {
  // @Query('athletes')
  // async findAll(): Promise<GraphQLTypes.AthleteResult[]> {
  //   const player = new GraphQLTypes.Player();
  //   player.id = '1';
  //   player.name = 'Asaf';
  //   player.number = 23;

  //   const runner = new GraphQLTypes.Runner();
  //   runner.id = '2';
  //   runner.name = 'Yossi';

  //   return [player, runner];
  // }

  // @ResolveField()
  // __resolveType(value: GraphQLTypes.Athlete) {
  //   if ('number' in value) {
  //     return 'Player';
  //   }
  //   return 'Runner';
  // }
}
