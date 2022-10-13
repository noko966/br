import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../app/api";
import { betRaceDetailsData, liderboard, leaderboardData } from "../fake_data";

const initialState = {
  liderboardDetails: null,
  dailyDetails: null,
  finalDetails: null,
  dailyPlayerDetails: null,
  finalPlayerDetails: null,
  userPlace: null,
  userWinningAmount: null,
};

export const getLiderboardDetails = createAsyncThunk("liderboard/liderboardDetails", async (tourneerId) => {
  // return liderboard
  // return leaderboardData;
  console.log(31313);
  return await api.getBetRaceTournamentLeaderboard(tourneerId);
});

export const getDetails = createAsyncThunk("liderboard/getDetails", async (tourneerId) => {
  // return betRaceDetailsData
  return await api.getBetRaceTournamentDetails(tourneerId);
});

export const liderboardSlice = createSlice({
  name: "liderboard",
  initialState,
  reducers: {
    setCurrentUserData: (state, { payload }) => {
      state.userPlace = payload.place;
      state.userWinningAmount = payload.winningAmount;
    },
  },
  extraReducers: {
    [getLiderboardDetails.fulfilled]: (state, { payload }) => {
      // console.log(payload, 'Leaderboard data');
      state.liderboardDetails = payload;
      state.dailyPlayerDetails = payload.D;
      state.finalPlayerDetails = payload.F;
    },
    [getDetails.fulfilled]: (state, { payload }) => {
      // console.log(payload, 'payload-------------------');
      // state.dailyDetails = null;
      state.dailyDetails = payload.PD?.D;
      state.finalDetails = payload.PD?.F;
      // state.finalDetails = null;
    },
  },
});

export const { setCurrentUserData } = liderboardSlice.actions;

export default liderboardSlice.reducer;
