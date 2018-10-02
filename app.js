const offCanvasToggleButton = document.querySelector('.toggleButton')

const body = document.querySelector('body')

offCanvasToggleButton.addEventListener('click', function (e) {
  document.body.classList.toggle('offCanvas-is-open')
  e.stopPropagation()
})

body.addEventListener('click', function () {
  document.body.classList.remove('offCanvas-is-open')
})
