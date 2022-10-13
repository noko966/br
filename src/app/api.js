import { httpApi } from '@sportdigi/http-api';
import {getWinningBetRaces} from "../slices/commonSlice";

export const api = {
  getBetRaceTournaments: async () => {
    // return await httpApi.getBetRaceTourneerWinnings();
    // return await httpApi.getBetRaceTournamentDetails(148);
    return await httpApi.getBetRaceTournaments();
  },
  getBetRaceTournamentDetails: async (tourneerId) => {
    // return await httpApi.getBetRaceTourneerWinnings();
    // return await httpApi.getBetRaceTournamentLeaderboard(tourneerId);
    return await httpApi.getBetRaceTournamentDetails(tourneerId);
  },
  getBetRaceTournamentLeaderboard: async (tourneerId) => {
    return await httpApi.getBetRaceTournamentLeaderboard(tourneerId);
  },
  getBetRaceTourneerWinnings: async (userId) => {
    return await httpApi.getBetRaceTourneerWinnings(userId);
  }
};
