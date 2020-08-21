// "use strict"
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(20, 20, 20);
const geometry2 = new THREE.BoxGeometry(20, 20, 20);

const material = new THREE.MeshPhongMaterial({
    color: 0xdaa520,
    specular: 0x750a0a,
    emissive: 0xdaa520,
    shininess: 20,
});

const material2 = new THREE.MeshPhongMaterial({
    color: 0xdaa520,
    specular: 0x750a0a,
    emissive: 0xdaa520,
    shininess: 20,
});

const frontSpot = new THREE.SpotLight(0x750a0a);
frontSpot.position.set(1000, 1000, 1000);
scene.add(frontSpot);

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const cube2 = new THREE.Mesh(geometry2, material2);
cube.rotation.x = 10;
scene.add(cube2);

const pointLight = new THREE.PointLight(0x750a0a, 2);
pointLight.position.set(0, 20, 30);
scene.add(pointLight);

const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(pointLightHelper)

const render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y -= 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y -= 0.01;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
};

camera.position.z = 55;

render();