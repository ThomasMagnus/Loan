import Slider from './slider'

export default class MainSlider extends Slider {
	constructor(btn, page, prevModuleBtn) {
		super(btn, page, prevModuleBtn)
	}

	showSlide(n) {

		try {

			if (n > this.slides.length - 1) {
				this.slideIndex = 1;
			}

			if (n < 0) {
				this.slideIndex = this.slides.length;
			}

			this.slides.forEach(slides => {
				slides.style.display = 'none'
			});
			
			this.slides[this.slideIndex - 1].style.display = 'block';

			this.hanson = document.querySelector('.hanson');

			this.hanson.style.opacity = 0;

			if (this.slideIndex == 3) {
				setTimeout(() => {
					this.hanson.style.opacity = '1'
					this.hanson.classList.add('slideInUp')
				}, 3000)
			} else {
				this.hanson.classList.remove('slideInUp')
			}

		} catch(e) {}
		
	}

	showSlider() {

		try {

			this.prevModuleBtn.forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault()
					this.slideIndex--;
					this.showSlide(this.slideIndex - 1)
				})
			});

			this.btn.forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault()
					this.slideIndex++;
					this.showSlide(this.slideIndex - 1)
				})
	
				item.parentNode.previousElementSibling.addEventListener('click', (e) => {
					e.preventDefault()
					this.slideIndex = 1;
					this.showSlide(this.slideIndex - 1)
				})
			})
		} catch(e) {}
	}

	render() {
		this.showSlide(this.slideIndex-1)
		this.showSlider()
	}
}