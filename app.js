lucide.createIcons()

const select = document.querySelector('.select'),
  selectedValue = document.getElementById('selected-value'),
  optionsViewButton = document.getElementById('options-view-button'),
  inputsOptions = document.querySelectorAll('.option input'),
  categorySelect = document.querySelector('#category-select'),
  options = document.querySelector('#options')

inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label

    const isMouseOrTouch =
      event.pointerType == 'mouse' ||
      event.pointerType == 'touch'

    isMouseOrTouch && optionsViewButton.click()
  })
})

// Sai do menu de opções após usar as teclas: Esc, Space, Enter
select.addEventListener('keydown', event => {
  if (!select.classList.contains('open')) return

  if (event.key == 'Escape' || event.key == ' ' || event.key == 'Enter') {
    optionsViewButton.click()
  }
})

optionsViewButton.addEventListener('change', () => {
  select.classList.toggle('open')

  if (!select.classList.contains('open')) return

  const input =
    document.querySelector('.option input:checked') ||
    document.querySelector('.option input')

  input.focus()
})

// Sai das opções após clicar fora da tela
select.addEventListener('click', event => {
  if (!select.classList.contains('open')) return
  if (categorySelect.contains(event.target)) return

  if (!options.contains(event.target)) {
    optionsViewButton.click()
  }
})
