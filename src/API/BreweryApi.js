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
      throw new Error(`Error ${res.status}: Wrong email or password`)
    }

    if (res.status === 404) {
      throw new Error(`Error ${res.status}: The user with the specified email was not found`)
    }

    if (res.status >= 300) {
      throw new Error(`Error ${res.status}: The "email" field must be a valid email address`)
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
      throw new Error(`Error ${res.status}: User with this email is already registered`)
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

export const breweryApi = new BreweryApi({
  signURL: 'https://api.react-learning.ru',
})
