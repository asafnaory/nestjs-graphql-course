import { Resolver, Query, Parent, ResolveField, Args } from '@nestjs/graphql';
import { Player } from '@prisma/client';
import { Team } from 'src/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlayersByTeamLoader } from './data-loader/players-by-team.loader';

@Resolver('Team')
export class TeamsResolver {
  constructor(
    private readonly playersByTeamLoader: PlayersByTeamLoader,
    private readonly prismaService: PrismaService,
  ) {}

  // @Query('teams')
  // async getAllTeams(): Promise<Team[]> {
  //   return this.prismaService.team.findMany({});
  // }

  // @Query('team')
  // async findOne(@Args('id' /*, Some pipes */) id: string) {
  //   console.log(id);
  //   return this.prismaService.team.findFirst({ where: { id } });
  // }

  // @ResolveField('players')
  // async getPlayersOfTeam(@Parent() team: Team): Promise<Player[]> {
  //   return this.playersByTeamLoader.load(team.id);
  // }

  // N + 1 Problem:

  // @ResolveField('players')
  // async getPlayersOfTeam(@Parent() team: Team): Promise<Player[]> {
  //   return await this.prismaService.player.findMany({
  //     where: {
  //       teamId: team.id,
  //     },
  //   });
  // }
}
