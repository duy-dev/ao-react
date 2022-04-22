import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./auth";
import { IAuthState } from "./auth/interface";
// import { IIsAuthState } from "./auth/interface";

export interface rootState {
  auth: IAuthState;
}

export default configureStore({
  reducer: {
    auth: authReduce,
  },
});
