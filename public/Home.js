'use strict';

import React from 'react';

import VisualizerContainer from './VisualizerContainer';

const Home = (props) =>  (
	
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--4-col">
				</div>
				
				<div className="mdl-cell mdl-cell--8-col">
					<VisualizerContainer/>
				</div>

			</div>	
						
);

export default Home;