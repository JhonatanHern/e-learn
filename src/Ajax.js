import React from 'react'
//import Comment from './Comment'
/*
	This is not a React element, is just a wrapper around ajax calls
*/
var url = 'https://elearn.serofca.com/'

// eslint-disable-next-line
let serializeproperties = function(arg) {
	let arr = []
	for(let key in arg){
		if (typeof arg[key] === 'function') {
			continue
		}
		arr.push(encodeURIComponent(key)+'='+encodeURIComponent(arg[key]))
	}
	return arr.join('&')
}

class Ajax{//
	static login(event,callback){
		let data = new FormData()
		data.append( "email", document.querySelector('#login input[name="email"]').value )
		data.append( "pass", document.querySelector('#login input[name="password"]').value )
		fetch(url+"queries/login.php",{
			method:"POST",
			body:data
		}).then(function(response) {
			return response.json()
		}).then(function(json) {
			callback(json)
		}).catch(function(err) {
			callback(false)
			console.log("error")
			console.log(err)
		})
	}
	static getIframe(videoId){
		return <iframe src="http://192.168.0.124/video/" allowfullscreen="true" title="video"/>
	}
	static getCourse(data,callback){
		fetch(url+"queries/fetchEntireCourse.php?"+serializeproperties(data))
		  .then(function(response) {
			return response.json()
		}).then(function(json) {
			callback(json)
		}).catch(function(err) {
			callback(false)
			console.log("error")
			console.log(err)
		})
	}
	static buyCourseLink(data,callback){
		fetch(url+'MP/kek.php?'+serializeproperties(data))
			.then(e=>e.json())
			.then(function(argument) {
				callback(argument)
			})
	}
	static getPremiumLink(data,callback){
		fetch(url+'MP/getPremiumLink.php?'+serializeproperties(data))
			.then(e=>e.json())
			.then(function(argument) {
				callback(argument)
			})
	}
	static getCategories(callback){
		fetch(url+"queries/fetchCategories.php")
		  .then(function(response) {
			return response.text()
		}).then(function(json) {
			callback(JSON.parse(json))
		}).catch(function(err) {
			callback(false)
			console.log('err at fetchCategories')
			console.log(err)
		})
	}
	static getCourses(callback){
		fetch(url+"queries/fetchCourses.php")
		  .then(function(response) {
			return response.text()
		}).then(function(json) {
			callback(JSON.parse(json))
		}).catch(function(err) {
			callback(false)
			console.log('err at fetchCourses')
			console.log(err)
		})
	}
}
export default Ajax