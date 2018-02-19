import React, { Component } from 'react';

import LoadingScreen from './LoadingScreen';
import Dashboard from './Dashboard';
import VideoApp from './VideoApp';
import Upgrade from './Upgrade';
import Course from './Course';
import Login from './Login';
import Ajax from './Ajax';
import Buy from './Buy';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			mode:"Login",
			num_v:null,
			id_cw:null,
			id_c:null,
			buyLink:null
		}
		this.historyPush = this.historyPush.bind(this)
		this.watchVideo = this.watchVideo.bind(this)
		this.viewCourse = this.viewCourse.bind(this)
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
			throw "can't go back"
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
		let that = this //quick solution to scope problems
		Ajax.login(e,function(success) {
			if (success) {
				that.historyPush("Dashboard")
			}else{
				alert("error, revisa tu conexión a internet")
			}
		})
	}
	viewCourse(e){
		let id = e.target.getAttribute('video')
		this.setState({id_cw:id})
		this.historyPush("Course")
	}
	buyCourse(event){
		this.historyPush("LoadingScreen")
		Ajax.buyCourseLink(this.state.id_cw,link=>{
			this.setState({buyLink:link})
			this.historyPush('Buy')
		})
	}
	watchVideo(e){
		this.historyPush("VideoApp")
	}
	render(){
		return  <section>
					{this.history.length?<span onClick={this.goBack} id="back"><i className="fa fa-arrow-left"></i></span>:null}
					
					<Login mode={this.state.mode} login={this.login}/>
					<Dashboard mode={this.state.mode} viewCourse={this.viewCourse}/>
					<Upgrade mode={this.state.mode} />
					<Buy mode={this.state.mode} link={this.state.buyLink}/>
					<Course
						mode={this.state.mode}
						id={this.state.id_cw}
						buy={this.buyCourse}
						watchVideo={this.watchVideo}
						/>
					<VideoApp mode={this.state.mode} />
					<LoadingScreen mode={this.state.mode} />
				</section>
	}
}
export default App;