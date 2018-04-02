import React from 'react'

class Course extends React.Component{
	constructor(props){
		'kek';
		super(props)
	}
	render(){
		if (this.props.mode !== "Course") {
			return null
		}
		let vids = []
		if (this.props.data.video) {
			vids = this.props.data.video.map((e,i)=>{
				return (
					<div data-video-title={e.name} data-video-id={e.id_video} key={i} onClick={this.props.data.userAccess && this.props.watchVideo}>
						<img data-video-title={e.name} data-video-id={e.id_video}
							src={
								'https://elearn.serofca.com/Images/Videos/' +
								this.props.id + '-' +
								e.id_video + '.jpg'}
							onLoad={function(e){
								e.target.style.height=e.target.offsetWidth*.4+'px'
								let elem = e.target
								window.addEventListener('resize',()=>elem.style.height=elem.offsetWidth*.4+'px')
							}}
							onError={function(e){e.target.style.display="none"}}
							alt=""
							/>
						<span data-video-title={e.name} data-video-id={e.id_video}>{e.name}</span>
					</div>
					)
			})
		}
		return (
			<div className="flexer" attr={this.props.id}>
				<img alt="course" className="cover" src={'https://elearn.serofca.com/Images/'+this.props.id+'.jpg'}/>
				<section className="course-info">
					<h1>{this.props.data.name}</h1>
					{
						!this.props.data.userAccess && 
						<span>
							Precio: {this.props.data.price} USD 
							<a className="light-link" onClick={this.props.buy}>comprar</a>
						</span>
					}
					<p>{this.props.data.description}</p>
				</section>
				<section className="course-videos">{vids}</section>
			</div>
			)
	}
}
export default Course;