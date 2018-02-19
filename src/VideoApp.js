import React, { Component } from 'react';
import logo from './logo.svg';
import Ajax from './Ajax';
import Comment from './Comment';
import CommentSection from './CommentSection';
import './App.css';

var id = 0

class VideoApp extends React.Component{
	constructor(props){
		super(props)
		this.state = {comments:[]}
		this.addComments = this.addComments.bind(this)
		this.newComment = this.newComment.bind(this)
		Ajax.getComments( id , this.addComments )
	}
	addComments(comms){
		this.setState({comments:comms},function(e){console.log(e)})
	}
	newComment(value) {
		if(!value){
			alert("escribe algo")
			return
		}
		let arr = this.state.comments
		arr.push(value)
		this.setState({comments:arr})
	}
	render(){
		if (this.props.mode !== "VideoApp") {return null}
		return (
			<section>
				{Ajax.getIframe()}
				<h2>{this.props.title}</h2>
				<CommentSection comments={this.state.comments} newComment={this.newComment}/>
			</section>
		)
	}
}
export default VideoApp;
