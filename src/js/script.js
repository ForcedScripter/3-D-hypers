import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as dar from 'dat.gui';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping
  1000 // Far clipping
);

const orbit = new OrbitControls(camera,renderer.domElement)


const axesHelper= new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(0,2,5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);

function animate(time){    //box rotation
    box.rotation.x=time/1000;
    box.rotation.y=time/1000;

      
    renderer.setClearColor(0x000000); // black canvas background

    renderer.render(scene,camera);
}

const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide

});



const plane = new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane);
plane.rotation.x= -0.5*Math.PI;
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);


const sphereGeometry = new THREE.SphereGeometry(4);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe:true
})
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);

sphere.position.set(-10,10,0);





renderer.setAnimationLoop(animate);

renderer.render(scene,camera);