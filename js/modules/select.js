// modules/select.js

// Константы
const ACTIVE_CLASS = 'active'

class Select {
	constructor() {
		this.select = document.querySelector('.__select')
		this.title = this.select.querySelector('.__select__title')
		this.options = this.select.querySelectorAll('.__select__label')
	}

	init() {
		this.#addTitleClickHandler()
		this.#addOptionClickHandlers()
	}

	// Обработчик клика по заголовку
	#addTitleClickHandler() {
		this.title.addEventListener('click', () => {
			this.toggle()
		})
	}

	// Обработчики кликов по опциям
	#addOptionClickHandlers() {
		this.options.forEach(option => {
			option.addEventListener('click', event => {
				this.setSelectedOption(event.target.textContent)
			})
		})
	}

	// Переключение состояния
	toggle() {
		if (this.select.getAttribute('data-state') === ACTIVE_CLASS) {
			this.select.setAttribute('data-state', '')
		} else {
			this.select.setAttribute('data-state', ACTIVE_CLASS)
		}
	}

	// Выбор опции
	setSelectedOption(text) {
		this.title.textContent = text
		this.select.setAttribute('data-state', '')
	}
}

export default Select
