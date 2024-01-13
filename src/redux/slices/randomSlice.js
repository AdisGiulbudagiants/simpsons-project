import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createQuote from '../../utils/createQuote'

export const fetchRandomQuote = createAsyncThunk(
  'random/fetchRandomQuote',
  async (url, thunkAPI) => {
    try {
      const data = await axios.get(url)
      return data.data
    } catch (error) {
      thunkAPI.dispatch(console.log(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  quotes: [],
  isLoadingViaAPI: false,
}

const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomQuote.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchRandomQuote.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false
      state.quotes = action.payload.map((el) => createQuote(el))
    })
    builder.addCase(fetchRandomQuote.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
})

export const selectQuote = (state) => state.random.quotes

export default randomSlice.reducer
