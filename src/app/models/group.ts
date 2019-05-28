import { Match } from './match';

export interface Group {
    name: string;
    winner: string;
    runnerup: string;
    matches: Array<Match>;
}
