import { configureStore } from '@reduxjs/toolkit';
import commonSlice from "../slices/commonSlice";
import mainSlice from '../slices/mainSlice';
import typesSlice from '../slices/typesSlice';
import liderboardSlice from '../slices/liderboardSlice';

const reducers = {
  common: commonSlice,
  main: mainSlice,
  types: typesSlice,
  leaderboard: liderboardSlice
};

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});
