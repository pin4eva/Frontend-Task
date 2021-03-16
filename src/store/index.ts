import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/productReducer";
import { combineReducers } from "redux";

// const reducer = combineReducers({ product: ProductReducer.reducer });

export const store = configureStore({
  reducer: {
    product: ProductReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
