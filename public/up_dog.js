


var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			camera.position.z = 20;

			var ambientLight = new THREE.AmbientLight(0x111111);
 			scene.add(ambientLight);

 			var asanaModel;

 			var loader = new THREE.JSONLoader();
 			loader.load("models/upward-facing-dog.json1.json", addModelToScene );

 			function addModelToScene( geometry, materials ) {
			   var material = new THREE.MeshFaceMaterial(materials);
			   asanaModel = new THREE.Mesh( geometry, material );
			   asanaModel.scale.set(0.5,0.5,0.5);
			   scene.add( asanaModel );
			 }

			var render = function () {
				requestAnimationFrame( render );

				renderer.render(scene, camera);
			};

			render();