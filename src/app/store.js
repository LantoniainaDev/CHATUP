import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../feature/user.slice";

export default configureStore({
    reducer:UserReducer,
})