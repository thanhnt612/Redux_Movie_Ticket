import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingReducer/bookingReducer";

export const store = configureStore({
  reducer: {
    bookingReducer: bookingReducer,
  },
});
