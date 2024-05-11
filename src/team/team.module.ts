import { Module } from '@nestjs/common';
import { TeamResolver } from './team.resolver';
import { TeamService } from './team.service';
import { TeamPlayersResolver } from './team-players.resolver';

@Module({
  providers: [TeamResolver, TeamService, TeamPlayersResolver],
})
export class TeamModule {}
