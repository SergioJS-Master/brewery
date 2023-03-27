import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const merchSlice = createSlice({
  name: 'merch',
  initialState: initState.merch,
  reducers: {
    setMerch(state, actions) {
      // state = {
      //   ...actions.payload, count: 1, selectedSize: null, inCart: false,
      // }
      return actions.payload.map((item) => ({
        ...item, count: 1, selectedSize: null, inCart: false,
      }))
    },
    increment(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload) {
          return (item.count += 1)
        }
        return item
      })
    },
    decrement(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload) {
          return (item.count -= 1)
        }
        return item
      })
    },
    setSize(state, actions) {
      console.log(actions)
      state.map((item) => {
        if (item.id === actions.payload.id) {
          item.selectedSize = actions.payload.size
        }
        return item
      })
    },
  },
})

export const {
  setMerch, increment, decrement, setSize,
} = merchSlice.actions
export const getMerchtSelector = (state) => state.merch
export const getMerchByIdSelector = (state, merchId) => state.merch
  .find(({ id }) => merchId === id)
export const merchReducer = merchSlice.reducer
