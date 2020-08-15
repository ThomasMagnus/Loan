import MainSlider from './modules/slider/mainSlider';
import Video from './modules/video';
import MiniSlider from './modules/slider/slider-mini';
import Differense from './modules/difference';
import Form from './modules/form';
import Input from './modules/detectInput';
import Accordeon from './modules/accordeon';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({btn: '.next', page: '.page'});
	slider.render()

	const modulePageSlider = new MainSlider({page: '.moduleapp', btn: '.next', prevModuleBtn: '.prevmodule'})
	modulePageSlider.render()

	const video = new Video('.showup__video .play', '.overlay', '.close');
	video.init()

	new Video('.module__video .play', '.overlay', '.close').init();

	const showUpSlider = new MiniSlider({
		page: '.showup__content-slider',
		nextBtn: '.showup__next',
		prevBtn: '.showup__prev',
	})

	showUpSlider.init()

	const modulesSlider = new MiniSlider({
		page: '.modules__content-slider',
		nextBtn: '.slick-next',
		prevBtn: '.slick-prev',
		animated: 'card-active',
		interval: true,
	})

	modulesSlider.init()

	const feedSlider = new MiniSlider({
		page: '.feed__slider',
		nextBtn: '.feed__slider .slick-next',
		prevBtn: '.feed__slider .slick-prev',
		animated: 'feed__item-active',
	})

	feedSlider.init()

	const difference = new Differense({
		cards: '.officer__card-item',
		plus: '.plus',
	})

	difference.render()

	const form = new Form('.form')

	form.postData()

	new Input('[type="email"]').checkInput()

	new Accordeon('.plus').render();

	new Download('.download').bindTrigger()

})