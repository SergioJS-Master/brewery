class BreweryApi {
  constructor({ signURL }) {
    this.signUrl = signURL
  }

  async signIn(values) {
    const res = await fetch(`${this.signUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (res.status === 401) {
      throw new Error(`Ошибка ${res.status}: Неправильные почта или пароль`)
    }

    if (res.status === 404) {
      throw new Error(`Ошибка ${res.status}: Пользователь с указанным email не найден`)
    }

    if (res.status >= 300) {
      throw new Error(`Ошибка ${res.status}: Поле "email" должно быть валидным email-адресом`)
    }

    return res.json()
  }

  async signUp(values) {
    const res = await fetch(`${this.signUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (res.status > 299) {
      throw new Error(`Ошибка ${res.status}: пользователь с таким email уже зарегистрирован`)
    }

    return res.json()
  }

  async getUserByToken(token) {
    const res = await fetch(`${this.signUrl}/v2/sm9/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    return res.json()
  }
}

export const signApi = new BreweryApi({
  signURL: 'https://api.react-learning.ru',
})
