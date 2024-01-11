import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createQuote from '../../utils/createQuote'

export const fetchQuote = createAsyncThunk('random/fetchQuote', async (url, thunkAPI) => {
  try {
    const data = await axios.get(url)
    return data.data[0]
  } catch (error) {
    thunkAPI.dispatch(console.log(error.message))
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  quotes: [],
  isLoadingViaAPI: false,
}

const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false
      if (state.quotes.length >= 1) {
        state.quotes.splice(0, 1)
        state.quotes.push(createQuote(action.payload))
      }
      if (state.quotes.length === 0) {
        state.quotes.push(createQuote(action.payload))
      }
    })
    builder.addCase(fetchQuote.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
})

export const selectQuote = (state) => state.random.quotes

export default randomSlice.reducer
