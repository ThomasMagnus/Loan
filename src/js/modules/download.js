export default class Download {
	constructor(download) {
		this.download = document.querySelectorAll(download);
		this.parth = 'assets/img/mainbg.jpg'
	}

	bindTrigger() {
		this.download.forEach(btn => {
			btn.addEventListener('click', (e) => {
				const a = document.createElement('a');
				a.href = this.parth;
				a.setAttribute('download', 'nice__picture')
				a.click()
			})
		})
	}
}