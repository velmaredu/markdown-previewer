import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
