import { Injectable } from '@nestjs/common';
import { Player } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPlayersByTeamId(teamId: string): Promise<Player[]> {
    return this.prismaService.player.findMany({
      where: {
        teamId: teamId,
      },
    });
  }
}
