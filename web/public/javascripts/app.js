const BASE_URL = 'http://localhost:3000'

function getUsers () {
  return fetch(`${BASE_URL}/usuarios`).then(response => response.json())
}

function createRow (user) {
  return `<tr> \
    <td> ${user.nome} </td> \
    <td> ${user.email} </td> \
    <td> ${user.telefone} </td> \
    <td> ${user.status} </td> \
    <td> ${user.createdAt} </td> \
  </tr> \
  `
}

async function initialize () {
  const users = await getUsers()

  const tBody = document.querySelector('tbody')
  const html = users.map(createRow).join('')
  tBody.innerHTML = html
}

initialize()
