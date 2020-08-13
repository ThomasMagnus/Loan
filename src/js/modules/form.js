export default class Form {
	constructor(form) {
		this.form = document.querySelector(form);
	}

	createMask() {
		const input = document.querySelectorAll('[name="phone"]');

		function setCursorPosition(pos, elem) {
			elem.focus();
	
			if (elem.setSelectionRange) {
				elem.setSelectionRange(pos, pos);
			} else if (elem.createTextRange) {
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		}
		
		function createMask(e) {
			let matrix = '+1 (___) ___-____',
				i = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, '');
	
				if (def.length >= val.length) {
					val = def;
				}
	
				this.value = matrix.replace(/./g, function(a) {
					return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
				});
	
				if (e.type === 'blur') {
					if (this.value.length == 2) {
						this.value = '';
					} else {
						setCursorPosition(this.value.length, this);
					}
				}
		}
	
		input.forEach(item => {
			item.addEventListener('input', createMask);
			item.addEventListener('focus', createMask);
			item.addEventListener('blur', createMask);
		})
	}

	postData() {

		this.createMask()

		const status = {
			success: 'Thanks! We will contact you soon',
			load: 'LOAD...',
			error: 'Sorry, an error occurred',
		}

		const createStatus = (statusText) => {
			const div = document.createElement('div');
			div.textContent = statusText;
			div.style.cssText = `
				font-size: 23px;
				color: #fff;
			`
			document.querySelector('.form__block').append(div)
			setTimeout(() => {
				div.remove()
			}, 5000)
		}

		try {

			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
	
				const formData = new FormData(this.form)
	
				fetch('./assets/question.php', {
					method: 'POST',
					body: formData,
				})
				.then((data) => data.text())
				.then(response => {
					console.log(response)
					createStatus(status.success)
				})
				.catch(() => createStatus(status.error))
				.finally(() => this.form.reset())
			})
		} catch(e) {}

	}


}