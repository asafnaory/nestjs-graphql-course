import { Module } from '@nestjs/common';
import { PlayersResolver } from './players.resolver';
// import { PlayersService } from './players.service';
// import { PlayersTeamResolver } from './players-team.resolver';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [PubSubModule],
  providers: [PlayersResolver, /*PlayersService, PlayersTeamResolver*/],
})
export class PlayersModule {}
