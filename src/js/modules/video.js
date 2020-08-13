export default class Video {
	constructor(btn, overlay, close) {
		this.btn = document.querySelectorAll(btn);
		this.overlay = document.querySelector(overlay);
		this.close = document.querySelector(close)
		this.activeBtn;
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
	}

	bindBtn() {

		this.btn.forEach(item => {
			item.addEventListener('click', () => {
				if (!item.firstElementChild.classList.contains('closed')) {

					this.activeBtn = item;

					if (!document.querySelector('iframe')) {
						this.overlay.style.display = 'flex'
						this.path = item.getAttribute('data-url')
	
						if(this.path !== item.getAttribute('data-url')) {
							this.path = item.getAttribute('data-url')
							this.player.loadVideoById({videoId: this.path})
						}
	
						this.createPlayer(this.path)
						
					} else {
	
						if(this.path !== item.getAttribute('data-url')) {
							this.path = item.getAttribute('data-url')
							this.player.loadVideoById({videoId: this.path})
						}
	
						this.overlay.style.display = 'flex'
					}
				}
			})
		})
	}

	createPlayer (url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: url,
			events: {
				'onStateChange': this.onPlayerStateChange,
			}
		});
	}

	onPlayerStateChange(event) {

		const blockElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
		const icon = this.activeBtn.firstElementChild.cloneNode(true);
		const lock = blockElem.querySelector('.closed');

		try {

			if (event.data === 0) {
				blockElem.style.filter = 'none';
				blockElem.style.opacity = '1';
				lock.firstElementChild.remove();
				lock.appendChild(icon);
				lock.nextElementSibling.textContent = 'PLAY VIDEO';
				lock.nextElementSibling.classList.remove('attention')
				blockElem.querySelector('.closed').classList.remove('closed')
			}

		} catch(e) {}

	}

	closeBtn() {
		this.close.addEventListener('click', () => {
			this.overlay.style.display = 'none';
			this.player.stopVideo();
		})
	}

	init() {

		if (this.btn.length > 0) {

			var tag = document.createElement('script');
	
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
			this.bindBtn()
			this.closeBtn()
		}
		
	}
}