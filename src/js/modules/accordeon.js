export default class Accordeon {
	constructor(plus) {
		this.plus = document.querySelectorAll(plus);
	}

	render() {
		this.plus.forEach(btn => {
			btn.addEventListener('click', () => {
				if (getComputedStyle(btn.parentElement.nextElementSibling).display === 'flex') {
					btn.parentElement.nextElementSibling.style.display = 'none';
					btn.parentElement.nextElementSibling.classList.remove('fadeInDown');
				} else {
					btn.parentElement.nextElementSibling.style.display = 'flex';
					btn.parentElement.nextElementSibling.classList.add('animated', 'fadeInDown');
				}
			})
		})
	}
}