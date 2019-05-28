import { Team } from './team';
import { Group } from './group';
import { Knockout } from './knockout';

export interface MatchResponse {
    stadiums: Array<any>;
    tvchannels: Array<any>;
    teams: Array<Team>;
    groups: {
        a: Group;
        b: Group;
        c: Group;
        d: Group;
        e: Group;
        f: Group;
        g: Group;
        h: Group;
    };
    knockout: {
        round_16: Knockout;
        round_8: Knockout;
        round_4: Knockout;
        round_2_loser: Knockout;
        round_2: Knockout;
    };
}
