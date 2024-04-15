/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePlayerInput {
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
}

export class Player {
    id: string;
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
}

export abstract class IQuery {
    players: Player[];
    player?: Nullable<Player>;
}

export abstract class IMutation {
    createPlayer?: Nullable<Player>;
}

type Nullable<T> = T | null;
