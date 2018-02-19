import React, { Component } from 'react';
class Comment extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let genUrl = "https://www.bucketlist.org/static/images/generic-profile-pic.png"
		return  <div key={this.props.keyCode}>
					<section>
						<img style={{height:"2em",borderRadius:"50%",border:"1px solid gray"}}
							src={this.props.url?this.props.url:genUrl}/>
						<span style={{fontSize:"2em"}}>
							 - {this.props.name?this.props.name:"name"}
						</span>
					</section>
					{this.props.children?this.props.children:<b className="gray">Missing comment</b>}
				</div>
	}
}
export default Comment;