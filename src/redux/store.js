// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations like middleware, enhancers, etc. can be added here
});

export default store;
