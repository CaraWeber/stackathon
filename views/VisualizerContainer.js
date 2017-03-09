'use strict';
import {connect} from 'react-redux';

import Visualizer from './Visualizer';

const mapStateToProps = ({model}) => {
	console.log("In map state to props for vis container");
	return {model}
}

export default connect(mapStateToProps)(Visualizer);