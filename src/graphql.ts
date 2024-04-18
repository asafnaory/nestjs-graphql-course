/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class TeamInput {
    name: string;
    city: string;
}

export class CreatePlayerInput {
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
    team: TeamInput;
}

export class UpdatePlayerInput {
    number?: Nullable<number>;
    name?: Nullable<string>;
    nickNames?: Nullable<string[]>;
    team?: Nullable<TeamInput>;
}

export class Player {
    id: string;
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
    team: Team;
}

export class Team {
    id: string;
    name: string;
    city: string;
    players?: Nullable<Player[]>;
}

export abstract class IQuery {
    players: Player[];
    player?: Nullable<Player>;
}

export abstract class IMutation {
    createPlayer?: Nullable<Player>;
    updatePlayer?: Nullable<Player>;
    deletePlayer?: Nullable<Player>;
}

type Nullable<T> = T | null;
