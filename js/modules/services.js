// modules/services.js

// Константы
const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

class ServicesFilter {
	constructor() {
		this.servicesBlock = document.querySelector('.services')

		this.manFilter = this.servicesBlock.querySelector('.services__btn_man')
		this.womanFilter = this.servicesBlock.querySelector('.services__btn_woman')

		this.manServices = this.servicesBlock.querySelector(
			'.services__wrapper_man'
		)
		this.womanServices = this.servicesBlock.querySelector(
			'.services__wrapper_woman'
		)
	}

	init() {
		this.#addFilterClickHandlers()
	}

	// Обработчики кликов по фильтрам
	#addFilterClickHandlers() {
		this.manFilter.addEventListener('click', () => {
			this.filter(
				this.manFilter,
				this.womanFilter,
				this.manServices,
				this.womanServices
			)
		})

		this.womanFilter.addEventListener('click', () => {
			this.filter(
				this.womanFilter,
				this.manFilter,
				this.womanServices,
				this.manServices
			)
		})
	}

	// Фильтрация
	filter(activeFilter, inactiveFilter, activeServices, inactiveServices) {
		activeFilter.classList.add(ACTIVE_CLASS)
		inactiveFilter.classList.remove(ACTIVE_CLASS)

		activeServices.classList.remove(HIDDEN_CLASS)
		inactiveServices.classList.add(HIDDEN_CLASS)
	}
}

export default ServicesFilter
