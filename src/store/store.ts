import { configureStore } from "@reduxjs/toolkit";
import starSystemReducer from './star-system.slice';
import astronomicalObjectReducer from './astronomical-object.slice';

export default configureStore({
  reducer: {
    starSystem: starSystemReducer,
    astronomicalObject: astronomicalObjectReducer
  }
})