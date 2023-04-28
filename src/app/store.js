import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
// This is the store

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})