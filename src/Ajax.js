import React, { Component } from 'react';
import Comment from './Comment';
/*
	This is not a React element, is just a wrapper around ajax calls
*/

class Ajax{//
	static login(event,callback){
		callback(true)
	}
	static getIframe(videoId){
		return (<section>
					<div 
						className="wistia_responsive_padding"
						style={{padding:"56.25% 0 0 0",position:"relative"}}>
						<div className="wistia_responsive_wrapper"
							style={{height:"100%",
								left:'0',
								position:'absolute',
								top:'0',
								width:'100%'}}>
							<iframe
								src="https://fast.wistia.net/embed/iframe/onffn9idyr?videoFoam=true"
								title="Wistia video player"
								allowtransparency="true"
								frameBorder="0"
								scrolling="no"
								className="wistia_embed"
								name="wistia_embed"
								allowFullScreen
								mozallowfullscreen="true"
								webkitallowfullscreen="true"
								oallowfullscreen="true"
								msallowfullscreen="true"
								width="100%" height="100%">
							</iframe>
						</div>
					</div>
					<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
				</section>)
	}
	static getDashboard(callback){
		setTimeout(()=>{
			callback([{
					name:"Course 1",
					id:1,
					imgsrc:"http://www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg"
				},{
					name:"Course 2",
					id:2,
					imgsrc:"http://www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg"
				},{
					name:"Course 3",
					id:3,
					imgsrc:"http://www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg"
				},{
					name:"Course 4",
					id:4,
					imgsrc:"http://www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg"
				},{
					name:"Course 5",
					id:5,
					imgsrc:"http://www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg"//www.cheyrad.com/wp-content/uploads/2016/04/Radiology.jpeg
				}
			])
		},500)
	}
	static getComments(videoId,callback){
		setTimeout(function(){
			let text = [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				"",
				null
			]
			callback(text)
		},1500)
	}
	static getCourse(id,callback){
		let temporal = {
			name:"Course n° "+id,
			photo:"http://www.fukushimawatch.com/wp-content/uploads/sites/12/2015/12/nuclear-radiation-exposure-warning.jpg",
			description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
			price:5.00,
			videos:[
				{
					id:1,
					title:"video n° ",
					url:"https://st2.depositphotos.com/1741969/5770/i/450/depositphotos_57709683-stock-photo-glitter-vintage-lights-background-gold.jpg"
				},
				{
					id:2,
					title:"video n° ",
					url:"https://st2.depositphotos.com/1741969/5770/i/450/depositphotos_57709683-stock-photo-glitter-vintage-lights-background-gold.jpg"
				},
				{
					id:3,
					title:"video n° ",
					url:"https://st2.depositphotos.com/1741969/5770/i/450/depositphotos_57709683-stock-photo-glitter-vintage-lights-background-gold.jpg"
				},
				{
					id:4,
					title:"video n° ",
					url:"https://st2.depositphotos.com/1741969/5770/i/450/depositphotos_57709683-stock-photo-glitter-vintage-lights-background-gold.jpg"
				}
			]
		}
		temporal.videos=temporal.videos.map((e,i)=>{
			e.title+=i
			return e
		})
		setTimeout(()=>callback(temporal),300)
	}
	static buyCourseLink(id,callback){
		setTimeout(callback,500,"https://mercadopago.com/comprar/"+id)
	}
}
export default Ajax;