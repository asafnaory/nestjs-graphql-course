import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Team } from '@prisma/client';
import { TeamService } from './teams.service';

@Resolver('Team')
export class TeamPlayersResolver {
  constructor(private teamService: TeamService) {}

  @ResolveField('players')
  getPlayers(@Parent() team: Team) {
    return this.teamService.getPlayersByTeamId(team.id);
  }
}
