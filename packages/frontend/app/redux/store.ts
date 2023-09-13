import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices";
// ...

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
