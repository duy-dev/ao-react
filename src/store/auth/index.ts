import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./interface";

const initialState: IAuthState = {
  isAuth: false,
  username: "zuy",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setIsAuth, setUsername } = authSlice.actions;

export default authSlice.reducer;
