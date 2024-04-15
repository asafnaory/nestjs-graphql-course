import { Injectable } from '@nestjs/common';
import { CreatePlayerInput, UpdatePlayerInput } from 'src/graphql';
import { Player } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class PlayersService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll(): Promise<Player[]> {
    return await this.prismaService.player.findMany();
  }

  async findOne(id: string): Promise<Player> {
    return await this.prismaService.player.findUnique({ where: { id } });
  }

  async create(createPlayerInput: CreatePlayerInput): Promise<Player> {
    return this.prismaService.player.create({
      data: {
        ...createPlayerInput,
      },
    });
  }

  async update(
    id: string,
    updatePlayerInput: UpdatePlayerInput,
  ): Promise<Player> {
    const player = await this.prismaService.player.findUnique({
      where: { id },
    });
    if (!player) {
      throw new UserInputError(`Player with id ${id} was not found`);
    }
    return this.prismaService.player.update({
      where: { id },
      data: {
        ...updatePlayerInput,
      },
    });
  }

  async remove(id: string): Promise<Player> {
    const player = await this.prismaService.player.findUnique({
      where: { id },
    });
    if (!player) {
      throw new UserInputError(`Player with id ${id} was not found`);
    }
    return this.prismaService.player.delete({
      where: { id },
    });
  }
}
