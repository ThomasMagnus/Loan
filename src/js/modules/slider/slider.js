export default class Slider {
	constructor ({
		btn = null, 
		page = null, 
		nextBtn = null, 
		prevBtn = null,
		prevModuleBtn = null, 
		animated,
		interval,
	} = {}) {
		try {
			this.page = document.querySelector(page);
			this.slides = this.page.children;
			this.btn = document.querySelectorAll(btn);
			this.nextBtn = document.querySelector(nextBtn);
			this.prevBtn = document.querySelector(prevBtn);
			this.prevModuleBtn = document.querySelectorAll(prevModuleBtn);
			this.animated = animated;
			this.interval = interval;
			this.slideIndex = 1;
		} catch(e) {}
	}

}