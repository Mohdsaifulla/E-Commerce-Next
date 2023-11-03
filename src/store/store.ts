import { configureStore } from "@reduxjs/toolkit";
import nextReducer from '../store/slice'
export const store = configureStore({
  reducer: {
next:nextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
