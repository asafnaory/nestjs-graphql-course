import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePlayerInput, Player } from 'src/graphql';
import { PlayersService } from './players.service';

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
  async create(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ): Promise<Player> {
    return this.playersService.create(createPlayerInput);
  }
}
