// modules/popups.js

// Константы
const SHOW_CLASS = 'popup-show'

class Popups {
	constructor() {
		this.openButtons = document.querySelectorAll('[data-popup]')
		this.closeButtons = document.querySelectorAll('.popup-close')
	}

	init() {
		this.#addOpenHandlers()
		this.#addCloseHandlers()
		this.#addPopupClickHandler()
	}

	// Добавляем обработчики на кнопки открытия
	#addOpenHandlers() {
		this.openButtons.forEach(button => {
			button.addEventListener('click', () => {
				const popupId = button.getAttribute('data-popup')
				this.open(popupId)
			})
		})
	}

	// Добавляем обработчики на кнопки закрытия
	#addCloseHandlers() {
		this.closeButtons.forEach(button => {
			button.addEventListener('click', () => {
				const popup = button.closest('.popup')
				if (popup) {
					this.close(popup)
				}
			})
		})
	}

	// Добавляем обработчик на клик вне попапа
	#addPopupClickHandler() {
		document.addEventListener('click', e => {
			const popup = e.target.closest('.popup')
			if (popup && e.target === popup) {
				this.close(popup)
			}
		})
	}

	// Открыть попап
	open(popupId) {
		const popup = document.querySelector(popupId)
		if (popup) {
			this.#setBodyPadding()
			popup.classList.add(SHOW_CLASS)
			document.body.classList.add('open')
		}
	}

	// Закрыть попап
	close(popup) {
		if (popup) {
			this.#resetBodyPadding()
			popup.classList.remove(SHOW_CLASS)
			document.body.classList.remove('open')
		}
	}

	// Установка padding на body
	#setBodyPadding() {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth
		document.body.style.paddingRight = `${scrollbarWidth}px`
	}

	// Сброс padding на body
	#resetBodyPadding() {
		document.body.style.paddingRight = ''
	}
}

export default Popups
