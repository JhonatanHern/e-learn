import React from 'react';
class Upgrade extends React.Component{
	// eslint-disable-next-line
	constructor(props){
		super(props)
	}
	render(){
		if (this.props.mode !== "Upgrade") {return null}
		return <div>Upgrade</div>
	}
}
export default Upgrade;