import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';
  
  export const fetchUsers = createAsyncThunk('users/fetchUsers', async (tag) => {
    const response = await fetch(`https://api.stackexchange.com/2.2/tags/${tag}/top-answerers/all_time?site=stackoverflow`);
    return (await response.json()).items;
  });
  
  export const usersAdapter = createEntityAdapter({
    selectId: (items) => items.user.user_id,
  });
  
  const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({
      loading: false
    }),
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = false;
      });
      builder.addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
    }
  });
  
  export const {
    selectById: selectUserById,
    selectIds: selectUserIds,
    selectEntities: selectUserEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers
  } = usersAdapter.getSelectors((state) => state.users);
  
  export default usersSlice.reducer;
  