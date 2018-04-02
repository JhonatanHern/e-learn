import React, { Component } from 'react';

import LoadingScreen from './LoadingScreen';
import Dashboard from './Dashboard';
import VideoApp from './VideoApp';
import Upgrade from './Upgrade';
import Course from './Course';
import Login from './Login';
import Ajax from './Ajax';
import Buy from './Buy';

import './App.css';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			email:null,
			password:null,
			mode:"Login",
			num_v:null,
			id_cw:null,
			id_c:null,
			buyLink:null,
			v_name:"Video",
			currentCourse:null
		}
		this.historyPush = this.historyPush.bind(this)
		this.watchVideo = this.watchVideo.bind(this)
		this.viewCourse = this.viewCourse.bind(this)
		this.getPremium = this.getPremium.bind(this)
		this.buyCourse = this.buyCourse.bind(this)
		this.goBack = this.goBack.bind(this)
		this.login = this.login.bind(this)
		this.history = []
	}
	historyPush(ns){
		this.setState({mode:ns})
		this.history.push(ns)
	}
	goBack(){
		let len = this.history.length
		if (!len) {
			console.log("can't go back")
			return
		}
		len--
		this.history = this.history.filter( (e,i) => i!==len )
		if (len===0) {
			this.setState({mode:"Login"})
		} else {
			if (this.history[len-1]==="LoadingScreen") {
				this.goBack()
				return
			}
			this.setState({mode:this.history[len-1]})
		}
	}
	login(e){//listener for the Login component
		e.preventDefault()
		this.historyPush("LoadingScreen")
		Ajax.login(e,json=> {
			if (json.success) {
				this.historyPush("Dashboard")
				if (json.premium) {
					this.setState({premium:true})
				}
			}else{
				alert("error, revisa tu usuario y contraseña.")
				this.goBack()
			}
		})
		this.setState({
			email   :document.querySelector( '#login  input[name="email"]' ).value,
			password:document.querySelector('#login input[name="password"]').value
		})
	}
	viewCourse(id){
		this.setState({id_cw:id})
		this.historyPush("LoadingScreen")
		let data = {
			id:id,
			mail:this.state.email,
			pw:this.state.password
		}
		Ajax.getCourse(data,(r)=>{
			this.setState({currentCourse:r})
			this.historyPush("Course")
		})
	}
	buyCourse(event){
		this.historyPush("LoadingScreen")
		let data = {
			id_course:this.state.id_cw,
			email:this.state.email,
			pass :this.state.password 
		}
		Ajax.buyCourseLink(data,json=>{
			window.open(json.link,"")
			this.goBack()
		})
	}
	getPremium(event){
		this.historyPush("LoadingScreen")
		let data = {
			email:this.state.email,
			pass :this.state.password 
		}
		Ajax.getPremiumLink(data,json=>{
			window.open(json.link,"")
			alert('llegará una notificación a tu correo cuando el pago esté verificado para acceder a una cuenta premium')
			this.goBack()
		})
	}
	watchVideo(e){
		this.setState({
			v_name:e.target.getAttribute('data-video-title'),
			id_video:e.target.getAttribute('data-video-id')
		})
		this.historyPush("VideoApp")
	}
	render(){
		return  <section>
					{this.history.length?<span onClick={this.goBack} id="back"><i className="fa fa-arrow-left"></i></span>:null}
					
					<Login
						mode={this.state.mode}
						login={this.login}/>
					<Dashboard
						premium={this.state.premium}
						mode={this.state.mode}
						viewCourse={this.viewCourse}
						getPremium = {this.getPremium}
						/>

					<Upgrade
						mode={this.state.mode} />
					<Buy
						mode={this.state.mode}
						link={this.state.buyLink}/>
					<Course
						premium={this.state.premium}
						mode={this.state.mode}
						id={this.state.id_cw}
						buy={this.buyCourse}
						watchVideo={this.watchVideo}
						data={this.state.currentCourse} 
						/>
					<VideoApp
						mode={this.state.mode}
						title={this.state.v_name}
						videoArguments={{
							id_course:this.state.id_cw,
							id_video:this.state.id_video,
							email:this.state.email,
							password:this.state.password
						}}/>
					<LoadingScreen
						mode={this.state.mode}/>
				</section>
	}
}
export default App;