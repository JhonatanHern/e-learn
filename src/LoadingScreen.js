import React from 'react'

class LoadingScreen extends React.Component{
	// eslint-disable-next-line
	constructor(props){
		super(props)
	}
	componentWillReceiveProps(np,ns){
	}
	render(){
		if (this.props.mode !== "LoadingScreen") {
			return null
		}
		return  <div className="big-load">
					<span>
						<img alt="img" className="l1" src="logo1.svg" />
						<img alt="img" className="l2" src="logo2.svg" />
						<img alt="img" className="l3" src="logo3.svg" />
					</span>
					<h3>Cargando</h3>
				</div>
	}
}
export default LoadingScreen;