import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../app/api";
import {winningBetRace, winningBetRaceData} from "../fake_data";

const initialState = {
  winningBetRaces: null,
};

export const getWinningBetRaces = createAsyncThunk("common/getWinningBetRaces", async (userId) => {
  // console.log(userId, 5355555555555555555);
  return await api.getBetRaceTourneerWinnings(userId);
  // return winningBetRace;
  // return winningBetRaceData;
});

export const commonSlice = createSlice({
  name: "common",
  initialState,
  extraReducers: {
    [getWinningBetRaces.fulfilled]: (state, { payload }) => {
      // console.log(payload, 'payload getWinningBetRaces');
      state.winningBetRaces = payload;
    },
    [getWinningBetRaces.fulfilled]: (state, { payload }) => {
      state.winningBetRaces = payload;
    },
  },
});

export default commonSlice.reducer;
