lucide.createIcons()

const select = document.querySelector('.select'),
  selectedValue = document.getElementById('selected-value'),
  optionsViewButton = document.getElementById('options-view-button'),
  inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label

    const isMouseOrTouch =
      event.pointerType == 'mouse' ||
      event.pointerType == 'touch'

    isMouseOrTouch && optionsViewButton.click()
  })
})

window.addEventListener('keydown', e => {
  if (!select.classList.contains('open')) return

  if (e.key == 'Escape' || e.key == ' ' || e.key == 'Enter') {
    optionsViewButton.click()
  }
})

optionsViewButton.addEventListener('input', () => {
  select.classList.toggle('open')

  if (!select.classList.contains('open')) return

  const input =
    document.querySelector('.option input:checked') ||
    document.querySelector('.option input')

  input.focus()
})

document.addEventListener('click', event => {
  if (!select.classList.contains('open')) return

  const options = document.querySelector('#options')

  if (!options.contains(event.target)) {
    optionsViewButton.click()
  }
})
