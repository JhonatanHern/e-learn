import React from 'react'
import Ajax from './Ajax'
import Loading from './Loading'

class Dashboard extends React.Component{
	constructor(props){
		super(props)
		this.state = {courses:null}
	}
	render(){
		if (this.props.mode !== "Dashboard") {return null}
		Ajax.getDashboard(arr=>{
			this.setState({
				courses:arr.map((c,i)=>{
					return <div className="course-prop" key={i} video={c.id} onClick={this.props.viewCourse}>
							<img src={c.imgsrc} video={c.id} />
							<h4 video={c.id} >{c.name}</h4>
							<span className="lil-link" video={c.id}>ver mas</span>
						</div>
				})
			})
		})
		return  <div className="dashboard">
					<h1>Cursos disponibles</h1>
					{this.state.courses?this.state.courses:<Loading />}
					<footer>
						Hay algún curso que te gustaría ver aquí?<br/>
						Contáctanos en <a href="https://serofca.com">serofca.com</a>
					</footer>
				</div>
	}
}
export default Dashboard;