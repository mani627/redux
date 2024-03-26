// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './slices';

const rootReducer = combineReducers({
  some: someReducer,
  // Add other reducers here
});

export default rootReducer;
