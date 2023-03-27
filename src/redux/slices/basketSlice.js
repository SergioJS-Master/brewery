/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const basketSlice = createSlice({
  name: 'basket',
  initialState: initState.basket,
  reducers: {
    basketAdd(state, actions) {
      const product = {
        id: actions.payload,
        count: 1,
        isChecked: false,
      }
      state.push(product)
    },
    clearAll() {
      return []
    },
    basketRemove(state, actions) {
      return state.filter((item) => item.id !== actions.payload)
    },
    basketCheckboxRemove(state) {
      return state.filter((item) => item.isChecked === false)
    },
    basketIsCkeckedOne(state, actions) {
      return state.map((item) => {
        if (item.id === actions.payload.id) {
          return {
            ...item,
            isChecked: actions.payload.isChecked,
          }
        }
        return item
      })
    },
    basketIsCheckedAllCards(state, actions) {
      state.map((product) => (product.isChecked = actions.payload))
    },
  },
})

export const {
  basketAdd,
  clearAll,
  basketRemove,
  basketCheckboxRemove,
  basketIsCkeckedOne,
  basketIsCheckedAllCards,
} = basketSlice.actions
export const getBasketSelector = (state) => state.basket
export const basketReducer = basketSlice.reducer
