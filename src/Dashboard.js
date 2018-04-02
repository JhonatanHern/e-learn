import React from 'react'
import Ajax from './Ajax'
import Loading from './Loading'

class Dashboard extends React.Component{
	constructor(props){
		super(props)
		this.classify = this.classify.bind(this)
		this.state = {
			courses:null,
			categories:[],
			loaded:false
		}
		let sum = 0
		Ajax.getCategories(json=>{
			if (!json) {
				console.log('error during query, no categories found')
				//window.location.reload()
				return
			}
			sum++
			this.setState({categories:json})
			if (sum === 2) {
				this.classify(json,this.state.courses)
			}
		})
		Ajax.getCourses(arr=>{
			if (!arr) {
				arr = []
				console.log('error during query, no results found')
			}
			sum++
			this.setState({courses:arr})
			if (sum === 2) {
				this.classify(this.state.categories,arr)
			}
		})
	}
	classify(categories,courses){
		this.state.categories.forEach((cat)=>{
			cat.coursesArray = this.state.courses.filter(c=>c.id_category === cat.id_category)
		})
	}
	render(){
		if (this.props.mode !== "Dashboard") {return null}

		let arr = []

		if (this.state.courses && this.state.courses.length) {
			arr = this.state.categories.map((cat,index)=>{
				if (!cat.coursesArray || !cat.coursesArray.length) {
					return null
				}
				let carray = cat.coursesArray.map((course,index)=>{
					return(
							<div key={index} onClick={()=>{this.props.viewCourse(course.id_course)}}>
								<a>{course.name}</a>
								<img
									src={'https://elearn.serofca.com/Images/'+course.id_course+'.jpg'}
									alt={course.name}
									onError={e=>{e.target.src='logo.svg'}}
									/>
							</div>
						)
				})
				return (
					<div className="category" key={index}>
						<h3 onClick={e=>{e.target.parentNode.classList.toggle("drop");e.target.parentNode.parentNode.classList.toggle("drop")}}>
							<i className="fa fa-arrow-down"/>
							<span>{cat.name}</span>
						</h3>
						{carray}
					</div>
					)
			})
		}

		return  <div className="dashboard">
					<h1>Categorías:</h1>
					{
						this.props.premium ?
							<span className="tiny-text gray-text w100">Usuario premium verificado</span>
						:
							<span className="w100" onClick={this.props.getPremium}>
								Comprar membresía premium
							</span>
					}
					{
						this.state.courses?
							this.state.courses.length?
								arr
							:
								<h3>Por ahora no hay cursos disponibles</h3>
						:
							<Loading />
					}
					<footer>
						Hay algún curso que te gustaría ver aquí?<br/>
						Contáctanos en <a href="https://serofca.com">serofca.com</a>
					</footer>
				</div>
	}
}
export default Dashboard;