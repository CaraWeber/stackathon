'use strict';
import React from 'react';



export default class App extends React.Component {
	render(){
		return (
			//eventually include navbar here
			// with this.props.children
			<div>
				<h1 style="text-align: center">asana space</h1>
				<ul style="list-style: none">
					<li>urdhva mukha svanasana</li>
					<li>tadasana</li>
					<li>adho mukha svanasana</li>
					<li><a href="down_dog_split.js">ardha adho mukha svanasana</a></li>
				</ul>
			</div>
		)
	}
}