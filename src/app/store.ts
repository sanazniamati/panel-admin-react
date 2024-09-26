/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi/authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "../featchers/auth/authSlice";
import customerReducer from "../featchers/customer/customerSlice";
import { customerApi } from "../services/customerApi/customerApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    customer: customerReducer,
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(customerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
