import { Module } from '@nestjs/common';
import { TeamResolver } from './teams.resolver';
import { TeamService } from './teams.service';
import { TeamPlayersResolver } from './team-players.resolver';

@Module({
  providers: [TeamResolver, TeamService, TeamPlayersResolver],
})
export class TeamModule {}
