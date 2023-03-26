import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const merchSlice = createSlice({
  name: 'merch',
  initialState: initState.merch,
  reducers: {
    setMerch(state, actions) {
      state = actions.payload
      return state
    },
  },
})

export const { setMerch } = merchSlice.actions
export const getMerchtSelector = (state) => state.merch
export const getMerchByIdSelector = (state, merchId) => state.merch
  .find(({ id }) => merchId === id)
export const merchReducer = merchSlice.reducer
