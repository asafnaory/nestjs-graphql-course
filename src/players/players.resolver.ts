import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Player } from 'src/graphql';
import { PlayersService } from './players.service';
import { UpdatePlayerInput } from './dto/update-player.input';
import { CreatePlayerInput } from './dto/create-player.input';
// import { UsePipes } from '@nestjs/common';
// import { ZodValidationPipe } from './zod/zod-validation-pipe';
// import { createPlayerInput } from './zod/create-player.input';

@Resolver()
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) {}
  @Query('players')
  async findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Query('player')
  async findOne(@Args('id' /*, Some pipes */) id: string): Promise<Player> {
    console.log(id);
    return this.playersService.findOne(id);
  }

  @Mutation('createPlayer')
  // @UsePipes(new ZodValidationPipe(createPlayerInput))
  async create(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ): Promise<Player> {
    return this.playersService.create(createPlayerInput);
  }

  @Mutation(() => Player)
  async updatePlayer(
    @Args('id') id: string,
    @Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput,
  ): Promise<Player> {
    return this.playersService.update(id, updatePlayerInput);
  }

  @Mutation(() => Player)
  async deletePlayer(@Args('id') id: string): Promise<Player> {
    return this.playersService.remove(id);
  }
}
