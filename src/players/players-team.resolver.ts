import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Player } from '@prisma/client';
import { PlayersService } from './players.service';

@Resolver('Player')
export class PlayersTeamResolver {
  constructor(private readonly playersService: PlayersService) {}

  // @ResolveField('team')
  // async getTeamOfPlayer(@Parent() player: Player) {
  //   return this.playersService.getTeamOfPlayer(player.teamId);
  // }
}
