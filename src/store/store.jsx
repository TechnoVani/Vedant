import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Reducers/UserReducer/userSlice";
export const store = configureStore({
    reducer: {
        User:  userSlice,
      },
});