import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import DataLoader from 'dataloader';
import { Player } from '@prisma/client';

@Injectable({ scope: Scope.REQUEST })
export class PlayersByTeamLoader extends DataLoader<string, Player[]> {
  constructor(private readonly prisma: PrismaService) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(teamIds: readonly string[]): Promise<Player[][]> {
    const players = await this.prisma.player.findMany({
      where: {
        teamId: {
          in: teamIds as string[],
        },
      },
    });

    const playersByTeamId: Record<string, Player[]> = {};

    players.forEach((player) => {
      if (!playersByTeamId[player.teamId]) {
        playersByTeamId[player.teamId] = [];
      }
      playersByTeamId[player.teamId].push(player);
    });

    return teamIds.map((teamId) => playersByTeamId[teamId] || []);
  }
}
