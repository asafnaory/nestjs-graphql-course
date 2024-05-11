import { Resolver } from '@nestjs/graphql';
import { TeamService } from './teams.service';

@Resolver('Team')
export class TeamResolver {
  constructor(private teamService: TeamService) {}
}
