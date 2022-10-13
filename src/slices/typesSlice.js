import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from "../app/api";
import {isMobile} from "../utils/helpers";

const initialState = {
  betRaceTypes: null,
  tourneerId: null,
  tourneerName: null,
  tourneerPeriod: null,
  currentPage: 0
};

export const betRaceDetails = createAsyncThunk('types/getBetRaceTournaments', async () => {
  return await api.getBetRaceTournaments();
  // return await betRaceDetails
});

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setTourneerDetails: (state, {payload}) => {
      state.tourneerId = payload.TID
      state.tourneerName = payload.N
      state.tourneerPeriod = payload.P
    },
    setTourneerId: (state, {payload}) => {
      state.tourneerId = payload
    },
    setPage: (state, {payload}) => {
      state.currentPage = payload
    }
  },
  extraReducers: {
    [betRaceDetails.fulfilled]: (state, {payload}) => {
      if (!isMobile()) {
        const types = Object.keys(payload);
        for (let i = 0; i < types.length; i++) {
          if (payload[types[i]].length) {
            state.tourneerId = payload[types[i]][0].TID;
            break
          }
        }
      }
      state.betRaceTypes = payload;
    },
    [betRaceDetails.rejected]: (state, {payload}) => {
      // console.log('rejected', payload);
    }
  }
});

export const {setTourneerDetails, setPage, setTourneerId} = typesSlice.actions;

export default typesSlice.reducer;
