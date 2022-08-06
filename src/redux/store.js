import { configureStore } from '@reduxjs/toolkit';
import { pfoneBookSlice } from './pfoneBookSlice';

export const store = configureStore({
  reducer: {
    contacts: pfoneBookSlice.reducer,
  },
});
