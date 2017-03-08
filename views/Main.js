'use strict';

import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import App from './App';




ReactDOM.render(
	<Router>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById('main'));
