'use strict';

import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import Home from './Home';
import App from './App';
import VisualizerContainer from './VisualizerContainer';
import store, {loadModel} from './store';





// onEnters to load different models
const loadUpDog = () => store.dispatch(loadModel('updog'));

const loadDownDogSplit = () => store.dispatch(loadModel('downdogsplit'));

const loadPrayerSky = () => store.dispatch(loadModel('prayersky'));

ReactDOM.render(
	
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App} >
					<Route path='/home' component={Home} onEnter={loadUpDog} />
					<Route path='/downdogsplit' component={Home} onEnter={loadDownDogSplit} />
					<Route path='/updog' component={Home} onEnter={loadUpDog} />
					<Route path='/prayersky' component={Home} onEnter={loadPrayerSky} />
				</Route>
			</Router>
		</Provider>,
	document.getElementById('main'));
