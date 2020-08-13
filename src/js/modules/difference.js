export default class Difference {
	constructor({cards, plus}) {
		this.cards = document.querySelectorAll(cards);
		this.plus = document.querySelectorAll(plus);
		this.officerOldCount = 0;
		try {
			this.officerNewCount = document.querySelector('.officerold').children.length - 1;
		} catch(e) {}
	}

	bindBtn() {

		const getProperty = (count) => {
			this.cards.forEach(item => {
				if (this.cards[count] == item) item.style.display = 'flex'
			})
		}

		const getCards = (e) => {

			const target = e.target;
				if (target.closest('.officerold')) {
					getProperty(this.officerOldCount)
					this.officerOldCount++
				} else if (target.closest('.officernew')) {
					getProperty(this.officerNewCount)
					this.officerNewCount++
				}
		}

		this.plus.forEach(item => item.addEventListener('click', getCards))
	}

	render() {

		this.cards.forEach(item => {
			if (!item.lastElementChild.classList.contains('card__click')) item.style.display = 'none'
		});

		this.bindBtn()
	}
}