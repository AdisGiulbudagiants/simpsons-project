import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createQuote from '../../utils/createQuote'

let initialState = {
  quotes: [],
  isLoadingViaAPI: false,
}

export const fetchCustomQuotes = createAsyncThunk(
  'custom/fetchCustomizedQuotes',
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

const customizeSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomQuotes.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchCustomQuotes.fulfilled, (state, action) => {
      state.quotes = action.payload.map((el) => createQuote(el))
    })
    builder.addCase(fetchCustomQuotes.rejected, (state) => {
      state.isLoadingViaAPI = false
    })
  },
})

export const selectCustom = (state) => state.custom.quotes
export const selectIsLoadingViaAPI = (state) => state.custom.isLoadingViaAPI

export default customizeSlice.reducer
