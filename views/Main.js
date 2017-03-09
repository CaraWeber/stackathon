'use strict';

import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { deepPurpleA400, deepPurple900, deepPurple100 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import VisualizerContainer from './VisualizerContainer';
import store, {loadModel} from './store';


import updog from './models/up-dog-model';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple900,
    accent1Color: deepPurpleA400,
    textColor: deepPurple100
  },
  appBar: {
    height: 100,
  },
});


// onEnters to load different models
const loadUpDog = () => store.dispatch(loadModel(updog));



ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={browserHistory}>
			<Route path="/" component={App} >
				<Route path='/home' component={VisualizerContainer} onEnter={loadUpDog} />
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('main'));
