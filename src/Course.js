import React, { Component } from 'react'
import Loading from './Loading'
import Ajax from './Ajax'

class Course extends React.Component{
	constructor(props){
		super(props)
		this.state = {loaded:false}
	}
	componentWillReceiveProps(np,ns){
		this.setState({loaded:false})
		Ajax.getCourse(np.id,(r)=>{
			r.loaded = true
			this.setState(r)
		})
	}
	render(){
		if (this.props.mode !== "Course") {
			return null
		}
		console.log('k')
		if (!this.state.loaded) {
			return <Loading />
		}
		let vids = this.state.videos.map((e,i)=>{
			return (
				<div key={i} onClick={this.props.watchVideo}>
					<img src={e.url} onLoad={function(e){e.target.style.height=e.target.offsetWidth*.4+'px'}}/>
					<span>{e.title}</span>
				</div>
				)
		})
		return (
			<div className="flexer" attr={this.props.id}>
				<img className="cover" src={this.state.photo}/>
				<section className="course-info">
					<h1>{this.state.name}</h1>
					<span>
						Precio: {this.state.price} USD 
						<a className="light-link" onClick={this.props.buy}>comprar</a>
					</span>
					<p>{this.state.description}</p>
				</section>
				<section className="course-videos">{vids}</section>
			</div>
			)
	}
}
export default Course;