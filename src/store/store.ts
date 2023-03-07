import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import appReducer from './app.slice';
import starSystemReducer from './star-system.slice';
import astronomicalObjectReducer from './astronomical-object.slice';
import settingsReducer from './settings.slice';

export default configureStore({
  enhancers: [applyMiddleware(thunkMiddleware)],
  reducer: {
    app: appReducer,
    starSystem: starSystemReducer,
    astronomicalObject: astronomicalObjectReducer,
    settings: settingsReducer
  },
})