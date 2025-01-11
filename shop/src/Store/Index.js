import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
const store=configureStore({
    reducer:{
        authSlice:AuthSliceReducer
    }
})
export default store