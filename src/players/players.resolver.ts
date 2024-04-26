import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PlayersService } from './players.service';
import { UpdatePlayerInput } from './dto/update-player.input';
import { CreatePlayerInput } from './dto/create-player.input';
import * as GraphQLTypes from 'src/graphql';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class PlayersResolver {
  constructor(
    private readonly playersService: PlayersService,
    private readonly pubSub: PubSub,
  ) {}
  @Query('players')
  async findAll() {
    return this.playersService.findAll();
  }

  @Query('player')
  async findOne(@Args('id' /*, Some pipes */) id: string) {
    console.log(id);
    return this.playersService.findOne(id);
  }

  @Mutation('createPlayer')
  async create(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ) {
    return this.playersService.create(createPlayerInput);
  }

  @Mutation(() => GraphQLTypes.Player)
  async updatePlayer(
    @Args('id') id: string,
    @Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput,
  ) {
    return this.playersService.update(id, updatePlayerInput);
  }

  @Mutation(() => GraphQLTypes.Player)
  async deletePlayer(@Args('id') id: string) {
    return this.playersService.remove(id);
  }
  @Subscription()
  playerAdded() {
    return this.pubSub.asyncIterator('playerAdded');
  }
}
