'use strict';
import React from 'react';
import ReactDOM from 'react-dom'

let OrbitControls = require('./OrbitControls');

export default class Visualizer extends React.Component {
	constructor(props){
		super(props);

		this.camera;
	    this.controls;
	    this.scene;
	    this.renderer;
	    this.animate = this.animate.bind(this);
	    this.mouse = new THREE.Vector2();
	    this.mirror = true;
	   	//this.objects = [];

	    this.onWindowResize = this.onWindowResize.bind(this);
	    this.componentDidMount = this.componentDidMount.bind(this);
	    //this.onMouseMove = this.onMouseMove.bind(this);
	    this.addModelToScene = this.addModelToScene.bind(this);
	}

	componentDidMount() {

	    this.initRenderer();
	    this.init();
	    this.animate();
	    document.getElementsByTagName('canvas')[0]
	      .addEventListener( 'mousemove', this.onMouseMove, false );
	    window.addEventListener( 'resize', this.onWindowResize, false );
	    window.requestAnimationFrame(this.render);
	}

	componentDidUpdate() {
	    // clear scene before adding new words/labels to it
	    this.init();
	}

	initRenderer() {
	    //to display the scene, create new renderer
	    let aCanvas = ReactDOM.findDOMNode(this.refs.myCanvas);

	    this.renderer = new THREE.WebGLRenderer({canvas: aCanvas, antialias: true});
  	}


  	init() {
	    console.log("INIT FUN");
	    // create the scene to contain 3d modules
	    this.scene = new THREE.Scene();
	    // this.scene.background = new THREE.Color( 0x3F163C);  * * *  BKGD COLOR * * * 

	    //the view from the userwindow.innerWidth / window.innerHeight
	    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	    this.camera.position.z = 10;

	    //orbit around some object
	    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
	    this.controls.autoRotate = true;

	    // lights
	    let light = new THREE.DirectionalLight( 0xffffff );
	    light.position.set( 1, 1, 1 );
	    this.scene.add( light );
	    light = new THREE.DirectionalLight( 0xffffff );
	    light.position.set( -1, -1, -1 );
	    this.scene.add( light );
	 
	    if(this.props.modelSource){
	    	const modelSource = this.props.modelSource;
			const loader = new THREE.JSONLoader();


			//use this!!!
			var loader = new THREE.JSONLoader();
 			loader.load( modelSource, this.addModelToScene );
			
	    }
	
	}

	addModelToScene( geometry) {
	   var material = new THREE.MeshLambertMaterial({color: '#F24987'});
	   let asanaModel = new THREE.Mesh( geometry, material );
	   asanaModel.scale.set(0.5,0.5,0.5);
	   this.scene.add( asanaModel );
	}   


		// HEY CARA, this function below needs work!!! needs to resize to element size, not
		// screen size!!!

		// auto resize
	onWindowResize(){
	    this.camera.aspect = window.innerWidth / window.innerHeight;
	    this.camera.updateProjectionMatrix();
	    this.renderer.setSize( window.innerWidth, window.innerHeight );
	  }

		// animation
	animate() {
	    requestAnimationFrame( this.animate );
	    this.controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
	    // this.stats.update();
	    //this.renderPlot();
	    this.renderer.render(this.scene, this.camera);
	  }


	render(){
		if(this) {// 'this' is sometimes undefined
        	console.log("inside the visualizer, this.props", this.props);

				return (
						<div id="container">
						 <canvas id="myCanvas" ref="myCanvas"/>
						</div>
					)

		}

	}

}
