'use strict';

import React from 'react';
import {Link} from 'react-router';

import VisualizerContainer from './VisualizerContainer';

const Home = (props) =>  (
		<div id="mainContainer">	
			<div id="contentContainer">
				<div className="mdl-cell mdl-cell--3-col div-holder">
						<div id="list">
							<h1> asanas </h1>
							<Link to="/updog"><p> upward facing dog </p></Link>
							<Link to="/downdogsplit"><p> down dog split </p></Link>
							<Link to="/lotus"><p> lotus </p></Link>
							<Link to="/prayersky"><p> prayer to the sky </p></Link>
							<p> (click asana name to view) </p>
						</div>
				</div>
				{console.log("in home component")}
				<div className="mdl-grid mdl-cell mdl-cell--7-col div-holder">
						<VisualizerContainer/>
				</div>
			</div>	
			<div id="photo-credit">
				<p> background photo: Veil Nebula by Ken Crawford - http://www.imagingdeepsky.com/Nebulae/NGC6960/FullSizeJpg/NGC6960.jpg, CC BY-SA 3.0 </p>
			</div>
		</div>				
);

export default Home;