import { configureStore } from '@reduxjs/toolkit';
import githubDataReducer from './githubData';

export const store = configureStore({
  reducer: {
    githubData: githubDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
