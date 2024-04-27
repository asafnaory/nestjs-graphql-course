import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { PlayersService } from './players.service';
import { UpdatePlayerInput } from './dto/update-player.input';
import { CreatePlayerInput } from './dto/create-player.input';
// import * as GraphQLTypes from 'src/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { Player } from './entities/player';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Player], { name: 'players' })
  async findAll() {
    return this.prismaService.player.findMany();
  }
  @Query(() => Player, { name: 'player' })
  async findOne(@Args('id' /*, Some pipes */) id: string) {
    console.log(id);
    return this.prismaService.player.findUnique({ where: { id } });
  }

  @Mutation(() => Player, { name: 'createPlayer' })
  async create(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ) {
    return this.prismaService.player.create({ data: createPlayerInput });
  }

  @Mutation(() => Player, { name: 'updatePlayer' })
  async updatePlayer(
    @Args('id') id: string,
    @Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput,
  ) {
    return this.prismaService.player.update({
      where: { id },
      data: updatePlayerInput,
    });
  }

  @Mutation(() => Player, { name: 'deletePlayer' })
  async deletePlayer(@Args('id') id: string) {
    return this.prismaService.player.delete({ where: { id } });
  }
  // @Subscription()
  // playerAdded() {
  //   return this.pubSub.asyncIterator('playerAdded');
  // }
}
