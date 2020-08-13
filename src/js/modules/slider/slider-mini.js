import Slider from './slider'

export default class MiniSlider extends Slider {
	constructor (page, nextBtn, prevBtn, slides, animated, interval) {
		super(page, nextBtn, prevBtn, slides, animated, interval)
	}

	bindStyle() {
		try {
			this.slides.forEach(item => {
				try {
					item.querySelector('.card__title').style.opacity = '.4';
					item.querySelector('.card__controls-arrow').style.opacity = '0';
				} catch(e) {}
	
				item.classList.remove(this.animated);
			});
	
			try {
				this.slides[0].querySelector('.card__title').style.opacity = '1';
				this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
			} catch(e) {}
	
			this.slides[0].classList.add(this.animated)
		} catch (e) {}
	}

	detectArg() {

		let arg;

		this.slides.forEach(item => {
			if (item.tagName === 'BUTTON') {
				arg = true;
			}
		})

		return arg
	}

	bindBtn() {

		const nextBtn = () => {

			if (this.detectArg()) {
				this.page.insertBefore(this.slides[0], this.prevBtn)
			} else {
				this.page.appendChild(this.slides[0])
			}


			this.bindStyle()
		}

		if (this.interval == true) {
			const intervalSlide = setInterval(nextBtn, 5000)
		}

		try {

			this.nextBtn.addEventListener('click', nextBtn)

			this.prevBtn.addEventListener('click', () => {
	
				if (this.detectArg()) {
					this.page.insertBefore(this.slides[this.slides.length - 3], this.slides[0])
				} else {
	
					this.page.insertBefore(this.slides[this.slides.length - 1], this.slides[0])
				}
				
				this.bindStyle()
			})

		} catch(e) {}

	}

	init() {

		try {

			this.page.style.cssText = `
				display: flex;
				overflow: hidden;
				flex-wrap: wrap;
				align-items: flex-start;
			`;
		} catch(e) {}

		this.bindBtn();
		this.bindStyle();
		
	}
}