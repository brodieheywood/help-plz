import { configureStore } from '@reduxjs/toolkit';
import topicSearchReducer from './topicSearchSlice';
import usersReducer from './users';

export default configureStore({
  reducer: {
    topicSearch: topicSearchReducer,
    users: usersReducer
  },
})