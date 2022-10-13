import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {api} from "../app/api";
import {betRaceDetailsData} from '../fake_data';

const initialState = {
  prizeDetails: null,
  conditions: null,
  sports: null,
  betRaceType: null
};

export const getBetRaceDetails = createAsyncThunk('main/getBetRaceTournamentDetails', async (tourneerId) => {
  return await api.getBetRaceTournamentDetails(tourneerId);
  // return await Promise.resolve(betRaceDetailsData)
  // return betRaceDetailsData
});

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  extraReducers: {
    [getBetRaceDetails.fulfilled]: (state, { payload }) => {
      // console.log('fulfilled', payload);
      state.tournamentId = payload.TID;
      state.prizeDetails = payload.PD;
      state.conditions = payload.C;
      state.sports = payload.T;
      state.betRaceType = payload.BRT;
      // state.sports = payload.sports;
      // state.prizeDetails = betRaceDetailsData.prizeDetails;
      // state.conditions = betRaceDetailsData.conditions;
      // state.sports = betRaceDetailsData.sports;
    },
    [getBetRaceDetails.pending]: (state, { payload }) => {
      // console.log('pending', payload);
    }
  }
});

export default mainSlice.reducer;
