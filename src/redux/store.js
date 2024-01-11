import { configureStore } from '@reduxjs/toolkit'
import randomReducer from './slices/RandomSlice'
import customizeReducer from './slices/customizeSlice'
import errorSlice from './slices/errorSlice'

const store = configureStore({
  reducer: {
    random: randomReducer,
    custom: customizeReducer,
    error: errorSlice,
  },
})

export default store
