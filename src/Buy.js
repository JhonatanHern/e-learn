import React, { Component } from 'react';
class Buy extends Component{
	// eslint-disable-next-line
	constructor(props){
		super(props)
	}
	render(){
		if (this.props.mode !== "Buy") {return null}
		return (
			<div className="clear">
				<a href={this.props.link} target="_blank" className="buy">Comprar</a>
			</div>
			)
	}
}
export default Buy;