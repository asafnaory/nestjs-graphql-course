import { Module } from '@nestjs/common';
import { PlayersResolver } from './players.resolver';
import { PlayersService } from './players.service';
import { PlayersTeamResolver } from './players-team.resolver';

@Module({
  providers: [PlayersResolver, PlayersService, PlayersTeamResolver],
})
export class PlayersModule {}
