const BASE_URL = 'http://localhost:3000'

class UsersService {
  static getAll () {
    return fetch(`${BASE_URL}/usuarios`)
      .then(response => response.json())
      .then(users =>
        users.map(user => {
          if ([1, 2].includes(user.id)) {
            user.status = true
          }

          return user
        })
      )
  }

  static removeById (userId) {
    return axios.delete(`${BASE_URL}/usuarios/${userId}`)
  }
}
