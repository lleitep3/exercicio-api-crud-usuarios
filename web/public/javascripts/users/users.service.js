const BASE_URL = 'http://localhost:3000'

class UsersService {
  static getAll () {
    return axios.get(`${BASE_URL}/usuarios`).then(response => response.data)
  }

  static removeById (userId) {
    return axios.delete(`${BASE_URL}/usuarios/${userId}`)
  }
}
