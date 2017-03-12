'use strict';
import React from 'react';
import {Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

const style = {
	color: '#264d73'
}



export default class App extends React.Component {
	constructor(props) {
		super(props);
        injectTapEventPlugin();		
	}

	render(){
		console.log("in APP component");
		return (<div>
					<div>
						{/* navbar here */}
						<header className="mdl-layout__header ava1496 mytext" style={style}>
							<div className="mdl-layout__header-row mytext">
						     {/*Add spacer, to align navigation to the right  */}
						     <div className="mdl-layout-spacer"></div>
						      <span className="mdl-layout-title mytext">asana space</span>
						    </div>
						  </header>
					</div>			
					<div id="stripe">
					</div>
					<div id="subHeader">
					</div>
					{this.props.children}
				</div>
		)
	}
}






















