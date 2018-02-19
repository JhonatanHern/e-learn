import React, { Component } from 'react';
class Login extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		if (this.props.mode !== "Login") {return null}
		return  <form id="login" onSubmit={this.props.login}>
					<input name="email"/>
					<input name="password"/>
					<input type="submit" value="Ingresar"/>
				</form>
	}
}
export default Login;