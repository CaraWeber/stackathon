'use strict';

import React from 'react';

import VisualizerContainer from './VisualizerContainer';

const Home = (props) =>  (
			<div className="mdl-grid">
				<div className="mdl-grid mdl-cell mdl-cell--4-col">
					<div className="mdl-cell mdl-cell--12-col" id="leftDiv">
						<div className="mdl-cell mdl-cell--12-col" id="list">
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