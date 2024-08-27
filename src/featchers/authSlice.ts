/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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
    setUser: (state, action: PayloadAction<{ name: string | undefined; token: string | undefined }>) => {
      localStorage.setItem("userToken", JSON.stringify({ name: action.payload.name, token: action.payload.token }));
      (state.name = action.payload.name), (state.token = action.payload.token);
      console.log("state.name :", action.payload.name);
      console.log("state.token:", action.payload.token);
    },
  },
});

export const selectAuth = (state: RootState) => state.authApi;

// Export actions
export const { setUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
