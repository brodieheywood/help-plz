import { createSlice } from '@reduxjs/toolkit'

export const topicSearchSlice = createSlice({
  name: 'topicSearch',
  initialState: {
    value: '',  // to get empty list from api - TODO use axios to handle 400 errors (eg. 404 from whitespace or empty tag)
  },
  reducers: {
    saveSearch: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { saveSearch } = topicSearchSlice.actions

export default topicSearchSlice.reducer;
