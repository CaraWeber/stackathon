'use strict';
import React from 'react';

let OrbitControls = require('three-orbit-controls')(THREE);


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
	    this.onMouseMove = this.onMouseMove.bind(this);
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
	    this.renderer = new THREE.WebGLRenderer();
	    this.renderer.setPixelRatio( window.devicePixelRatio );
	    this.renderer.setSize( window.innerWidth, window.innerHeight );

	    //code below is from capstone project; not sure where "container" comes from 
	    
	    //let container = document.getElementById( 'container' );
	    //container.appendChild( this.renderer.domElement );

	    //wondering if the code below will work . . . ?  
	    document.body.appendChild( renderer.domElement );
  	}


  	init() {
	    console.log("INIT FUN");
	    // create the scene to contain 3d modules
	    this.scene = new THREE.Scene();

	    //the view from the userwindow.innerWidth / window.innerHeight
	    this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 10000 );
	    this.camera.position.z = 10;

	    //orbit around some object
	    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
	    this.controls.enableDamping = true;
	    this.controls.dampingFactor = 0.25;
	    this.controls.enableZoom = true;

	    // lights
	    let light = new THREE.DirectionalLight( 0xffffff );
	    light.position.set( 1, 1, 1 );
	    this.scene.add( light );
	    light = new THREE.DirectionalLight( 0xffffff );
	    light.position.set( -1, -1, -1 );
	    this.scene.add( light );
	
	    if(this.props.model){
	    	const model = this.props.model;
			const loader = new THREE.JSONLoader();
 			loader.load( this.props.model, addModelToScene );
 			// NEED TO MAKE SURE loadable blender model is on state!!!! 
	    }
	}

		// auto resize
	onWindowResize() {
	    this.camera.aspect = window.innerWidth / window.innerHeight;
	    this.camera.updateProjectionMatrix();
	    this.renderer.setSize( window.innerWidth, window.innerHeight );
	  }

		// animation
	animate() {
	    requestAnimationFrame( this.animate );
	    this.controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
	    // this.stats.update();
	    this.renderPlot();
	  }

	addModelToScene( geometry, materials ) {
		let asanaModel;	

	    var material = new THREE.MeshFaceMaterial(materials);
	    asanaModel = new THREE.Mesh( geometry, material );
	    asanaModel.scale.set(0.5,0.5,0.5);
	    scene.add( asanaModel );
	}

	render(){
		if(this) {// 'this' is sometimes undefined
        	console.log("inside the visualizer renderer");
			
				return (
						<div id="container">
						</div>
					)

		}

	}

}














