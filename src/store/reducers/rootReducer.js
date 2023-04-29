import { combineReducers } from 'redux';
import darkModeReducer from './darkModeSlice';
// Importar otros posibles reducers de la aplicación

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  // Agregar otros posibles reducers de la aplicación aquí
});

export default rootReducer;
