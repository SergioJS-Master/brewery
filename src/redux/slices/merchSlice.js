/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
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
        ...item,
        count: 1,
        selectedSize: null,
        isChecked: false,
        inCart: false,
      }))
    },
    increment(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload.id) {
          return (item.count += 1)
        }
        return item
      })
    },
    decrement(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload.id) {
          return (item.count -= 1)
        }
        return item
      })
    },
    setSize(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload.id) {
          item.selectedSize = actions.payload.size
        }
        return item
      })
    },
    resetCount(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload) {
          item.count = 1
        }
        return item
      })
    },
    setChecked(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload.id) {
          item.isChecked = actions.payload.isChecked
        }
        return item
      })
    },
    setAllChecked(state, actions) {
      state.map((item) => {
        if (item.inCart) {
          item.isChecked = actions.payload
        }
        return item
      })
    },
    removeCheckedMerch(state) {
      state.map((item) => {
        if (item.isChecked) {
          item.isChecked = false
          item.inCart = false
        }

        return item
      })
    },
    removeMerchFromCart(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload) {
          item.inCart = false
          item.isChecked = false
        }
        return item
      })
    },
    addInCart(state, actions) {
      state.map((item) => {
        if (item.id === actions.payload) item.inCart = true
        return item
      })
    },
    clearAll() {
      return []
    },
  },
})

// eslint-disable-next-line operator-linebreak
export const {
  setMerch,
  increment,
  decrement,
  setSize,
  resetCount,
  setChecked,
  setAllChecked,
  addInCart,
  removeCheckedMerch,
  removeMerchFromCart,
  clearAll,
} = merchSlice.actions

export const getMerchtSelector = (state) => state.merch

export const getMerchByIdSelector = (state, merchId) => state.merch.find(({ id }) => merchId === id)

export const getMerchInCartSelector = (state) => state.merch.filter(({ inCart }) => inCart)

export const getCheckedMerch = (state) => state.merch.filter(({ isChecked }) => isChecked)

export const getMerchByIdsSelector = (state, merchIds) =>
  state.merch.filter(({ id }) => merchIds.includes(id))

export const merchReducer = merchSlice.reducer
