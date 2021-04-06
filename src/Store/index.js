import { configureStore } from '@reduxjs/toolkit';
import topicSearchReducer from './topicSearchSlice';
import usersReducer from './usersSlice';

export default configureStore({
  reducer: {
    topicSearch: topicSearchReducer,
    users: usersReducer,
  },
});
