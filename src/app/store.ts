import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import homePageReducer from "../app/containers/HomePage/homePageSlice"
import searchPageReducer from "../app/containers/SearchPage/searchPageSlice"

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    searchPage: searchPageReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
