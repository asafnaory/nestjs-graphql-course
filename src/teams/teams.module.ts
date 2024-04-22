import { Module } from '@nestjs/common';
import { PlayersByTeamLoader } from './data-loader/players-by-team.loader';
import { TeamsResolver } from './teams.resolver';

@Module({
  providers: [TeamsResolver, PlayersByTeamLoader],
})
export class TeamsModule {}
