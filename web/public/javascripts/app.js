function mountHTML (users) {
  const rows = users.map(UserTableRow.render).join('')

  const tBody = document.querySelector('tbody')
  tBody.innerHTML = rows
}

function hideRowsNotMatched (term) {
  /*   document.querySelectorAll('tbody tr').forEach(row => {
    if (!row.children[0].innerText.toLowerCase().includes(term.toLowerCase())) {
      row.classList.add('hide')
      return
    }

    row.classList.remove('hide')
  }) */

  document.querySelectorAll('tbody tr').forEach(row => {
    const { nome, email, telefone, createdAt } = JSON.parse(row.dataset.user)

    const str = [nome, email, telefone, createdAt].join('\n')

    if (str.toLowerCase().includes(term.toLowerCase())) {
      row.classList.remove('hide')
      return
    }

    row.classList.add('hide')
  })
}

function bindEvents () {
  const btn = document.querySelector('button.btn.delete')

  btn.addEventListener('click', async event => {
    const { userId } = event.currentTarget.dataset

    await UsersService.removeById(userId)

    renderScreen()
  })

  // const form = document.getElementById('form-filter')

  // form.onsubmit = function (event) {
  //   const term = event.currentTarget.elements.namedItem('term').value
  //   hideRowsNotMatched(term)
  //   event.preventDefault()
  // }

  const filter = document.getElementById('term')

  filter.addEventListener('keyup', event => {
    const term = event.currentTarget.value
    hideRowsNotMatched(term)
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
