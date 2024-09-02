/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { USER_TOKEN } from "../constants/localStorageKeys";

interface AuthState {
  name: string | undefined;
  token: string | undefined;
}
// Initial state
const initialState: AuthState = {
  name: undefined,
  token: undefined,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        name: string | undefined;
        token: string | undefined;
      }>
    ) => {
      localStorage.setItem(
        USER_TOKEN,
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
        })
      );
      (state.name = action.payload.name), (state.token = action.payload.token);
      console.log("state.name :", action.payload.name);
      console.log("state.token:", action.payload.token);
    },
  },
});

export const selectAuthName = (str: RootState) => str.auth.name;
export const tokenSelector = (str: RootState) => str.auth.token;

// Export actions
export const { setUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
