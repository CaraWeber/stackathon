'use strict';

import React from 'react';
import {Link} from 'react-router';

import VisualizerContainer from './VisualizerContainer';

const Home = (props) =>  (
			<div className="mdl-grid">
				<div className="mdl-grid mdl-cell mdl-cell--4-col">
					<div className="mdl-cell mdl-cell--12-col" id="leftDiv">
						<div className="mdl-cell mdl-cell--12-col" id="list">
							<h1> asanas </h1>
							<Link to="/updog"><p> upward facing dog </p></Link>
							<Link to="/downdogsplit"><p> down dog split </p></Link>
							<Link to="/prayersky"><p> prayer to the sky </p></Link>
						</div>
					</div>
				</div>
				{console.log("in home component")}
				<div className="mdl-grid mdl-cell mdl-cell--7-col">
					<div className="mdl-cell mdl-cell--12-col" id="rightDiv">
						<VisualizerContainer/>
					</div>
				</div>

			</div>	
						
);

export default Home;