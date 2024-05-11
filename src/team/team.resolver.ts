import { Resolver } from '@nestjs/graphql';
import { TeamService } from './team.service';

@Resolver('Team')
export class TeamResolver {
  constructor(private teamService: TeamService) {}
}
