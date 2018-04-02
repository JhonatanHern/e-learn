import React from 'react';

//var id = 0
let serializeproperties = function() {
	let arr = []
	for(let key in this){
		if (typeof this[key] === 'function') {
			continue
		}
		arr.push(encodeURIComponent(key)+'='+encodeURIComponent(this[key]))
	}
	return arr.join('&')
}

class VideoApp extends React.Component{
	constructor(props){
		super(props)
		this.isFullScreen = false
		this.updateProgressBar    = this.updateProgressBar.bind(this)
		this.toggleFullScreen   = this.toggleFullScreen.bind(this)
		this.exitFullScreen   =  this.exitFullScreen.bind(this)
		this.progressSwitch = this.progressSwitch.bind(this)
		this.playOrPause  =   this.playOrPause.bind(this)
		this.fullScreen =   this.fullScreen.bind(this)
		setInterval(this.updateProgressBar,2000)
	}
	render(){
		if (this.props.mode !== "VideoApp") {return null}
		console.log(this.props.videoArguments)
		return (
			<section>
				<section id="frame" onContextMenu={(e)=>e.preventDefault()}>
					<video
						id="video"
						autoPlay="true"
						onContextMenu={(e)=>{e.preventDefault();return false}}
						>
						<source
							id="src"
							src={ "https://elearn.serofca.com/gimmeVideo.php?" + serializeproperties.bind(this.props.videoArguments)()}
							type="video/mp4"/>
					</video>
					<section id="controls" onClick={(e)=>e.stopPropagation()}>
						<div id="shade" />
						<div id="progress" onClick={this.progressSwitch}>
							<div id="ptotal" style={{width:'30%'}}></div>
						</div>
						<i id="videoPlay" className="fa fa-pause" onClick={this.playOrPause}></i>
						<i onClick={this.toggleFullScreen} className="fa fa-window-maximize"></i>
					</section>
				</section>
				<h2>{this.props.title}</h2>
			</section>
		)
	}
	toggleFullScreen(){
		let element = document.getElementById('frame')
		if (this.isFullScreen) {
			this.exitFullScreen(element)
		} else {
			this.fullScreen(element)
		}
	}
	fullScreen(i){
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
		this.isFullScreen = true
	}
	exitFullScreen(element) {
		if (element.exitFullscreen) {
			element.exitFullscreen();
		} else if (element.webkitExitFullscreen) {
			element.webkitExitFullscreen();
		} else if (element.mozCancelFullScreen) {
			element.mozCancelFullScreen();
		} else if (element.msExitFullscreen) {
			element.msExitFullscreen();
		}
		this.isFullScreen = false
	}
	playOrPause(e){
		if (e.target.classList.contains('fa-play')) {
			e.target.classList.add('fa-pause')
			e.target.classList.remove('fa-play')
			document.getElementById('video').play()
		} else {
			e.target.classList.remove('fa-pause')
			e.target.classList.add('fa-play')
			document.getElementById('video').pause()
		}
	}
	updateProgressBar() {
		let video = document.getElementById('video')
		if (video){
			document.getElementById('ptotal').style.width =( ( video.currentTime * 100 ) / video.duration)+'%'
		}
	}
	progressSwitch(event){
		let click = event.clientX
		let progressAmount = (click * 100) / event.target.offsetWidth
		let duration = document.getElementById('video').duration
		document.getElementById('video').currentTime = Math.floor((progressAmount/100)*duration)
		this.updateProgressBar()
	}
}
export default VideoApp;
