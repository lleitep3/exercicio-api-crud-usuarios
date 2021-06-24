class UserTableRow {
  static getActionButtons (user) {
    return `<button class="btn delete" data-user-id="${user.id}" > ❌ </button>`
  }

  static render (user) {
    const [label, statusClass] = user.status
      ? ['Ativo', 'active']
      : ['Inativo', 'inactive']

    const actionButtons = UserTableRow.getActionButtons(user)

    return `<tr class="${statusClass}" data-user='${JSON.stringify(user)}'> \
        <td> ${user.nome} </td> \
        <td> ${user.email} </td> \
        <td> ${user.telefone} </td> \
        <td> ${label} </td> \
        <td> ${user.createdAt} </td> \
        <td> ${actionButtons} </td> \
      </tr>`
  }
}
