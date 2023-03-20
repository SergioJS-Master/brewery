/* eslint-disable class-methods-use-this */
class BarsApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl
  }

  getAuthorizationHeader(token) {
    return `Bearer ${token}`
  }

  async checkToken(token) {
    if (!token) throw new Error('Отсутствует токен')
  }

  async getAllBars() {
    const res = await fetch(`${this.baseUrl}/bars/`)

    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при получении списка баров.
          Проверьте отправляемые данные. Status: ${res.status}`)
    }

    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении списка баров.
            Попробуйте сделать запрос позже. Status: ${res.status}`)
    }

    return res.json()
  }

  async addBar(values, token) {
    this.checkToken(token)

    const res = await fetch(`${this.baseUrl}/bars`, {
      method: 'POST',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    if (res.status >= 300) {
      throw new Error(
        `Произошла ошибка при добавлении бара, код ${res.status}`,
      )
    }
    return res.json()
  }

  async deleteBar(barId, token) {
    this.checkToken(token)

    const res = await fetch(`${this.baseUrl}/bars/${barId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.getAuthorizationHeader(token),
      },
    })
    if (res.status >= 300) {
      throw new Error(
        `${res.status}: Произошла ошибка при удалении бара, код ${res.statusText}.`,
      )
    }
    return res.json()
  }

  async editBar(barId, data, token) {
    this.checkToken(token)

    const res = await fetch(`${this.baseUrl}/bars/${barId}`, {
      method: 'PATCH',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.status >= 300) {
      throw new Error(
        `${res.status}: Произошла ошибка при редактировании данных о баре, код ${res.statusText}.`,
      )
    }
    return res.json()
  }

  async getBarsByIds(ids, token) {
    this.checkToken(token)
    return Promise.all(
      ids.map((id) => fetch(`${this.baseUrl}/bars/${id}`, {
        headers: {
          authorization: this.getAuthorizationHeader(token),
        },
      }).then((res) => res.json())),
    )
  }

  async getBarById(id) {
    const res = await fetch(`${this.baseUrl}/bars/${id}`)

    if (res.status >= 300) {
      throw new Error(`Произошла ошибка, код ${res.status}`)
    }

    return res.json()
  }
}

export const barsApi = new BarsApi({
  baseUrl: 'http://localhost:5000/api/v1',
})
