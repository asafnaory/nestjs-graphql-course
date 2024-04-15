import { Injectable } from '@nestjs/common';
import { CreatePlayerInput, Player } from 'src/graphql';
import * as crypto from 'crypto';

const data: Player[] = [
  {
    id: '1',
    number: 23,
    name: 'Micheal Jordan',
    nickNames: ['MJ', 'His Airness'],
  },
  {
    id: '2',
    number: 24,
    name: 'Kobe Bryant',
    nickNames: ['Black Mamba', 'Vino'],
  },
];

@Injectable()
export class PlayersService {
  findAll(): Player[] {
    return data;
  }
  findOne(id: string): Player {
    return data.find((player) => player.id === id);
  }
  create(createPlayerInput: CreatePlayerInput): Player {
    data.push({ ...createPlayerInput, id: crypto.randomUUID() });
    return data[data.length - 1];
  }
}
