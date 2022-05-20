import { combineReducers } from 'redux'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import basicSlice from './basic/slice'
import basicInitialState from '@/store/basic/initial'

const rootReducer = combineReducers({
  basic: basicSlice.reducer,
})

const preloadedState = () => {
  return { basic: basicInitialState }
}

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: preloadedState(),
})
export default store
