var personaje= new THREE.Geometry();
personaje.vertices.push( new THREE.vector3( 1,  0,  1 ) ); // vertice 0
personaje.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // vertice 1
personaje.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // vertice 2
personaje.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // vertice 3
personaje.vertices.push( new THREE.Vector3( 0,  1,  0 ) ); // vertice 4
//personaje.vertices.push( new THREE.Vector3( 0, -1,  0 ) ); // vertice 5

personaje.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
personaje.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
personaje.faces.push( new THREE.Face3( 3, 0, 4) );
personaje.faces.push( new THREE.Face3( 0, 1, 4) );
personaje.faces.push( new THREE.Face3( 1, 2, 4) );
personaje.faces.push( new THREE.Face3( 2, 3, 4) );
//personaje.faces.push( new THREE.Face3( 3, 0, 5) );
//personaje.faces.push( new THREE.Face3( 0, 1, 5) );
//personaje.faces.push( new THREE.Face3( 1, 2, 5) );
//personaje.faces.push( new THREE.Face3( 2, 3, 5) );

personaje.computeBoundingSphere();
personaje.computeFaceNormals();

var material= new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( personaje, material );

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );