'use strict'



var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			camera.position.z = 20;

			var controls = new THREE.OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;

			var ambientLight = new THREE.AmbientLight(0x404040,8);
 			scene.add(ambientLight);

 			var pointLight =
					  new THREE.PointLight(0xFFFFFF);

					// set its position
					pointLight.position.x = 50;
					pointLight.position.y = 50;
					pointLight.position.z = 130;

					// add to the scene
					scene.add(pointLight);

 			var asanaModel;

 			// var loader = new THREE.ObjectLoader();

 			// loader.load( "models/upward-facing-dog.json", function ( object ) {
    //                     scene.add( object );
    //         } );

 			var loader = new THREE.JSONLoader();
 			loader.load( "models/upward-facing-dog.json", addModelToScene );


 		// 	for ( var i = 0; i < geometry.vertices.length; i ++ ) {
	
			// 	// Imaginary functions to calculate the indices and weights
			// 	// This part will need to be changed depending your skeleton and model
			// 	var skinIndex = calculateSkinIndex( geometry.vertices, i );
			// 	var skinWeight = calculateSkinWeight( geometry.vertices, i );
			// }


 			function addModelToScene( geometry, materials ) {
			   var material = new THREE.MeshFaceMaterial(materials);
			   asanaModel = new THREE.Mesh( geometry, material );
			   asanaModel.scale.set(0.5,0.5,0.5);
			   scene.add( asanaModel );
			 }

			var render = function () {
				requestAnimationFrame( render );

				renderer.render(scene, camera);
				controls.update();

			};

			render();