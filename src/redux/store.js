import { configureStore } from '@reduxjs/toolkit'
import randomReducer from './slices/randomSlice.js'
import customizeReducer from './slices/customizeSlice.js'
import errorSlice from './slices/errorSlice.js'

const store = configureStore({
  reducer: {
    random: randomReducer,
    custom: customizeReducer,
    error: errorSlice,
  },
})

export default store
