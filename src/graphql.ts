
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Position {
    POINT_GUARD = "POINT_GUARD",
    SHOOTING_GUARD = "SHOOTING_GUARD",
    SMALL_FORWARD = "SMALL_FORWARD",
    POWER_FORWARD = "POWER_FORWARD",
    CENTER = "CENTER"
}

export class TeamInput {
    name: string;
    city: string;
}

export class CreatePlayerInput {
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
    team: TeamInput;
    position?: Nullable<Position>;
}

export class UpdatePlayerInput {
    number?: Nullable<number>;
    name?: Nullable<string>;
    nickNames?: Nullable<string[]>;
    team?: Nullable<TeamInput>;
    position?: Nullable<Position>;
}

export interface Athlete {
    name: string;
}

export class Runner implements Athlete {
    id: string;
    name: string;
    createdAt?: Nullable<Date>;
}

export class Player implements Athlete {
    id: string;
    number: number;
    name: string;
    nickNames?: Nullable<string[]>;
    team: Team;
    createdAt?: Nullable<Date>;
    position?: Nullable<Position>;
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
    athletes: AthleteResult[];
}

export abstract class IMutation {
    createPlayer?: Nullable<Player>;
    updatePlayer?: Nullable<Player>;
    deletePlayer?: Nullable<Player>;
}

export type AthleteResult = Player | Runner;
type Nullable<T> = T | null;
