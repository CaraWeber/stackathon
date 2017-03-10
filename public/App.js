'use strict';
import React from 'react';

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
						  <div className="mdl-layout__drawer">
						    <span className="mdl-layout-title">asanas</span>
						    <nav className="mdl-navigation">
						      <a className="mdl-navigation__link" href="">Link</a>
						      <a className="mdl-navigation__link" href="">Link</a>
						      <a className="mdl-navigation__link" href="">Link</a>
						      <a className="mdl-navigation__link" href="">Link</a>
						    </nav>
						  </div>
					<div id="stripe">
					</div>
					</div>
					<div id="subHeader">
					</div>
					{this.props.children}
				</div>
		)
	}
}


