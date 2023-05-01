import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeSlice";
import markdownReducer from "./reducers/markdownSlice"; 

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    markdown: markdownReducer,
  },
});

export default store;
