export default class Inpup {
	constructor(email) {
		this.email = document.querySelectorAll(email);
	}

	checkInput() {
		this.email.forEach(item => {
			item.addEventListener('keypress', (e) => {
				if (!e.key.match(/[^а-яё]/ig)) {
					e.preventDefault();
				}
			})

			item.addEventListener('input', () => {
				if (!item.value.match(/[^а-яё]/ig)) {
					item.value = ''
				}
			})
		})
	}
}