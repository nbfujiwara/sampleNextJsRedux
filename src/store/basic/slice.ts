// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/types/User'
import basicInitialState from '@/store/basic/initial'

const basicSlice = createSlice({
  name: 'basic',
  initialState: basicInitialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    setLogon(state, action: PayloadAction<boolean>) {
      state.isLogon = action.payload
    },
  },
})

export default basicSlice
