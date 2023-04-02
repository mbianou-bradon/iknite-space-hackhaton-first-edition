import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { carSlice } from '../features/carSlice';


export const store = configureStore({
  reducer: {
    carReducer: carSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
