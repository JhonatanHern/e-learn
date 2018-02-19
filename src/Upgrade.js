import React, { Component } from 'react';
class Upgrade extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		if (this.props.mode !== "Upgrade") {return null}
		return <div>Upgrade</div>
	}
}
export default Upgrade;