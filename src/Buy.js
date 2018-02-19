import React, { Component } from 'react';
class Buy extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		if (this.props.mode !== "Buy") {return null}
		return (
			<div className="clear">
				<a href={this.props.link} className="buy">Comprar</a>
			</div>
			)
	}
}
export default Buy;