import React, { Component } from 'react';
class Login extends Component{
	// eslint-disable-next-line
	constructor(props){
		super(props)
	}
	render(){ 
		if (this.props.mode !== "Login") {return null}
		return  <form id="login" onSubmit={this.props.login}>
					<input name="email" placeholder="email" type="email"/>
					<input name="password" placeholder="password" type="password"/>
					<input type="submit" value="Ingresar"/>
				</form>
	}
}
export default Login;