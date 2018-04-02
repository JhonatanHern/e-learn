
//full screen code:
(function(){
	let isFullScreen = false
	function fullScreen() {
		let i = document.getElementById('frame')
		// go full-screen
		if (i.requestFullscreen) {
			i.requestFullscreen()
		} else if (i.webkitRequestFullscreen) {
			i.webkitRequestFullscreen()
		} else if (i.mozRequestFullScreen) {
			i.mozRequestFullScreen()
		} else if (i.msRequestFullscreen) {
			i.msRequestFullscreen()
		}
		isFullScreen = true
	}
	function exitFullScreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		isFullScreen = false
	}
	document.getElementById('videoFullScreen').addEventListener('click',function() {
		if (isFullScreen) {
			exitFullScreen()
		} else {
			fullScreen()
		}
	})

	function preventPropagation(event) {
		event.stopPropagation()
		try{
			window.event.cancelBubble = true
		}catch(e){

		}
	}
	
	let play = document.getElementById('videoPlay'),
		progress = document.getElementById('progress'),
		viewedProgress = document.getElementById('ptotal'),
		video = document.getElementById('video'),
		controls = document.getElementById('controls')
	function videoProgress(event) {
		let click = event.clientX
		let progressAmount = (click * 100)/progress.offsetWidth
		progress.value = progressAmount
		let duration = video.duration
		video.currentTime = Math.floor((progressAmount/100)*duration)
		updateProgressBar()
	}
	function updateProgressBar() {
		console.log('kek')
		viewedProgress.style.width =( ( video.currentTime * 100 ) / video.duration)+'%'
	}
	setInterval(updateProgressBar,2000)
	function playOrPause() {
		if (this.classList.contains('fa-play')) {
			this.classList.add('fa-pause')
			this.classList.remove('fa-play')
			video.play()
		} else {
			this.classList.remove('fa-pause')
			this.classList.add('fa-play')
			video.pause()
		}
	}
	progress.addEventListener('click',videoProgress)
	play.addEventListener('click',playOrPause)
	controls.addEventListener('click',preventPropagation)
	video.addEventListener('click',playOrPause)
})()
