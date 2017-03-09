'use strict';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';





export default class App extends React.Component {
	constructor(props) {
		super(props);
        injectTapEventPlugin();		
	}

	render(){
		console.log("in APP component");
		return (<div>
				<AppBar title="asana space" />
				{this.props.children}
				</div>
		)
	}
}



// 							<li>urdhva mukha svanasana</li>
// 							<li>tadasana</li>
// 							<li>adho mukha svanasana</li>
// 							<li>ardha adho mukha svanasana</li>

