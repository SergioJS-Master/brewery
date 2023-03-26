import { configureStore } from '@reduxjs/toolkit'
import { TOKEN_LS_KEY } from './constants'
import { getIniteState } from './initState'
import { basketReducer } from './slices/basketSlice'
import { favouriteReducer } from './slices/favouriteSlice'
import { merchReducer } from './slices/merchSlice'
import { userReducer } from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    favourite: favouriteReducer,
    basket: basketReducer,
    merch: merchReducer,
  },
  preloadedState: getIniteState(),
})

console.log('Рендерится store')
console.log(store.getState())

store.subscribe(() => {
  window.localStorage.setItem(TOKEN_LS_KEY, JSON.stringify(store.getState()))
})
