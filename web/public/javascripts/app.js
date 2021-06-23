function mountHTML (users) {
  const rows = users.map(UserTableRow.render).join('')

  const tBody = document.querySelector('tbody')
  tBody.innerHTML = rows
}

function bindEvents () {
  const btn = document.querySelector('button.btn.delete')

  btn.addEventListener('click', async event => {
    const { userId } = event.currentTarget.dataset

    await UsersService.removeById(userId)

    renderScreen()
  })
}

async function renderScreen () {
  const users = await UsersService.getAll()
  mountHTML(users)
  bindEvents()
}

async function initialize () {
  await renderScreen()
}

window.onload = function () {
  initialize()
}
