let $=ip=>document.querySelector(`${ip}`)

$(`#pop_up-close_x`).addEventListener('click',e=>
  Dialog.closeDialog(`#pop_up`)
)

$(`#dialog_menu-close_x`).addEventListener('click',e=>
  Dialog.closeDialog(`#dialog_menu`)
)

$(`#header_burger`).addEventListener('click',e=>
  Dialog.showDialog(`#dialog_menu`)
)
$(`#apply_telegram`).addEventListener('click',e=>
  Dialog.showDialog(`#pop_up`)
)
