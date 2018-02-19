import React, { Component } from 'react';
import Loading from './Loading';
import Comment from './Comment';
class CommentSection extends React.Component{
	constructor(props){
		super(props)
		this.addComment = this.addComment.bind(this)
	}
	addComment(e){
		this.props.newComment(document.getElementById('new-comment').value)
		document.getElementById('new-comment').value=""
	}
	render(){
		return( <section className="comments">
					{this.props.comments.length?
						this.props.comments.filter(e=>!!e).map((t,i) => <Comment key={i}>{t}</Comment>):
						<Loading />}
					<input type="text" id="new-comment" placeholder="Escribe un comentario!"/>
					<button onClick={this.addComment}>Enviar</button>
				</section>)
	}
}
export default CommentSection;