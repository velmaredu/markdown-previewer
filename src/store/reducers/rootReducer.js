import { combineReducers } from 'redux';
import darkModeReducer from './darkModeSlice';
import markDownReducer from './markdownSlice';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  markdown: markDownReducer,
});

export default rootReducer;
