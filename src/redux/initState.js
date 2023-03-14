import { TOKEN_LS_KEY } from './constants'

export const initState = {
  user: {
    group: '',
    name: '',
    email: '',
    token: '',
    userId: '',
  },
  favourite: [],
}

console.log('Рендерится initState')

export const getIniteState = () => {
  const dataFromLS = window.localStorage.getItem(TOKEN_LS_KEY)
  const preparedData = dataFromLS ? JSON.parse(dataFromLS) : initState
  return preparedData
}
