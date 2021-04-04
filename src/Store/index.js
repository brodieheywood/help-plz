import { configureStore } from '@reduxjs/toolkit';
import topicSearchReducer from './topicSearchSlice';

export default configureStore({
  reducer: {
    saveSearch: topicSearchReducer,
  },
})