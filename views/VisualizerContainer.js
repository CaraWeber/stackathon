'use strict';
import {connect} from 'react-redux';

import Visualizer from './Visualizer';

const mapStateToProps = ({modelSource}) => ({modelSource})


export default connect(mapStateToProps)(Visualizer);