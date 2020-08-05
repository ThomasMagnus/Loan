export default class Video {
	constructor(btn, overlay, close) {
		this.btn = document.querySelector(btn);
		this.overlay = document.querySelector(overlay);
		this.close = document.querySelector(close)
	}

	createPlayer (url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url,
		});

		console.log(this.player);
	}

	bindBtn() {

		this.btn.addEventListener('click', () => {
			if (!document.querySelector('iframe')) {
				this.overlay.style.display = 'flex'
				this.createPlayer(this.path)
			} else {
				this.overlay.style.display = 'flex'
			}
		})
	}

	closeBtn() {
		this.close.addEventListener('click', () => {
			this.overlay.style.display = 'none';
			this.player.stopVideo();
		})
	}

	init() {
		
		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		this.path = this.btn.getAttribute('data-url')

		this.bindBtn()
		this.closeBtn()
	}
}