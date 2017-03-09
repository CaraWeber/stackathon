import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


// action creator

export const loadModel = (model) => ({
	type: 'RECEIVE_MODEL',
	model: model
})

// reducer

const reducer = (state, action) => {
	let newState = Object.assign({}, state);
	if(action.type = 'RECEIVE_MODEL'){
		newState.model = action.model
	}
	return newState;
}


// store

const store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware))

export default store