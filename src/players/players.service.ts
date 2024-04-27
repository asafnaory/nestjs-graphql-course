import { Injectable } from '@nestjs/common';
// import { UserInputError } from '@nestjs/apollo';
// import { CreatePlayerInput } from './dto/create-player.input';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { Player, Team } from '@prisma/client';
// import { UpdatePlayerInput } from './dto/update-player.input';
// import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PlayersService {
  //   constructor(
  //     private readonly prismaService: PrismaService,
  //     private readonly pubSub: PubSub,
  //   ) {}
  //   async findAll() {
  //     return await this.prismaService.player.findMany();
  //   }
  //   async findOne(id: string): Promise<Player> {
  //     const player = await this.prismaService.player.findUnique({
  //       where: { id },
  //     });
  //     if (!player) {
  //       throw new UserInputError(`Player with id ${id} was not found`);
  //     }
  //     return player;
  //   }
  //   async create(createPlayerInput: CreatePlayerInput): Promise<Player> {
  //     const team = await this.preloadTeamByName(createPlayerInput.team);
  //     const newPlayer = await this.prismaService.player.create({
  //       data: {
  //         ...createPlayerInput,
  //         team: {
  //           connect: { id: team.id },
  //         },
  //       },
  //     });
  //     this.pubSub.publish('playerAdded', { playerAdded: newPlayer });
  //     return newPlayer;
  //   }
  //   async update(
  //     id: string,
  //     updatePlayerInput: UpdatePlayerInput,
  //   ): Promise<Player> {
  //     const player = await this.prismaService.player.findUnique({
  //       where: { id },
  //     });
  //     if (!player) {
  //       throw new UserInputError(`Player with id ${id} was not found`);
  //     }
  //     const { team, ...otherUpdates } = updatePlayerInput;
  //     let teamUpdate = {};
  //     if (team) {
  //       const existingTeam = await this.prismaService.team.findFirst({
  //         where: { name: team.name },
  //       });
  //       if (!existingTeam) {
  //         throw new UserInputError(`Team with name ${team.name} was not found`);
  //       }
  //       teamUpdate = {
  //         team: {
  //           connect: { id: existingTeam.id },
  //         },
  //       };
  //     }
  //     return this.prismaService.player.update({
  //       where: { id },
  //       data: { ...otherUpdates, ...teamUpdate },
  //     });
  //   }
  //   async remove(id: string): Promise<Player> {
  //     const player = await this.prismaService.player.findUnique({
  //       where: { id },
  //     });
  //     if (!player) {
  //       throw new UserInputError(`Player with id ${id} was not found`);
  //     }
  //     await this.prismaService.player.delete({ where: { id } });
  //     return player;
  //   }
  //   async preloadTeamByName(teamInfo: {
  //     name: string;
  //     city: string;
  //   }): Promise<Team> {
  //     const existingTeam = await this.prismaService.team.findFirst({
  //       where: { name: teamInfo.name },
  //     });
  //     if (existingTeam) {
  //       return existingTeam;
  //     }
  //     return this.prismaService.team.create({ data: teamInfo });
  //   }
  //   async getTeamOfPlayer(teamId: string): Promise<Team> {
  //     return this.prismaService.team.findUnique({
  //       where: { id: teamId },
  //       include: { players: true },
  //     });
  //   }
}
