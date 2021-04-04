import { createSlice } from '@reduxjs/toolkit'

export const topicSearchSlice = createSlice({
  name: 'topicSearch',
  initialState: {
    value: '',
  },
  reducers: {
    saveSearch: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { saveSearch } = topicSearchSlice.actions

export default topicSearchSlice.reducer;
