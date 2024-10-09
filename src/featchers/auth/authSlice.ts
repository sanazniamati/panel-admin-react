/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { USER_INFO, USER_TOKEN } from "../../constants/localStorageKeys";
import { IInitialState } from "./authSliceType";

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
    setUser: (state, action: PayloadAction<IInitialState>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      // state.rememberChecked = action.payload.rememberChecked;

      if (action.payload.rememberChecked) {
        console.log("hi localstorage");
        localStorage.setItem(
          USER_INFO,
          JSON.stringify({
            userName: action.payload.name,
            userToken: action.payload.token,
          })
        );
      } else {
        console.log("hi session");
        sessionStorage.setItem(
          USER_INFO,
          JSON.stringify({
            userName: action.payload.name,
            userToken: action.payload.token,
          })
        );
      }
    },
  },
});

export const selectUsername = (str: RootState) => str.auth.name;
export const tokenSelector = (str: RootState) => str.auth.token;

// Export actions
export const { setUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
