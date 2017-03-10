'use strict';

import React from 'react';

import VisualizerContainer from './VisualizerContainer';

const Home = (props) =>  (
	
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--4-col">
					<div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-inner">
					</div>
				</div>
				
				<div className="mdl-cell mdl-cell--7-col">
					<div className="mdl-cell mdl-cell--7-col mdl-cell--7-col-inner">
						<VisualizerContainer/>
					</div>
				</div>

			</div>	
						
);

export default Home;