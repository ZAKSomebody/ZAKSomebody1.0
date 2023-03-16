// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 7;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000021, 1); // Set the background color here
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Create a rounded cube with lines on each side
const loader = new THREE.TextureLoader();
const texture1 = loader.load('/face/faceC.png');
const texture2 = loader.load('/face/faceC.png');
const texture3 = loader.load('/face/faceC.png');
const texture4 = loader.load('/face/faceC.png');
const texture5 = loader.load('/face/faceC.png');
const texture6 = loader.load('/face/faceC.png');
const materials = [
  new THREE.MeshStandardMaterial({ map: texture1 }),
  new THREE.MeshStandardMaterial({ map: texture2 }),
  new THREE.MeshStandardMaterial({ map: texture3 }),
  new THREE.MeshStandardMaterial({ map: texture4 }),
  new THREE.MeshStandardMaterial({ map: texture5 }),
  new THREE.MeshStandardMaterial({ map: texture6 }),
  // new THREE.MeshStandardMaterial({ color: 0xff0000 }),
  // new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
  // new THREE.MeshStandardMaterial({ color: 0x0000ff }),
  // new THREE.MeshStandardMaterial({ color: 0x00ffff }),
  // new THREE.MeshStandardMaterial({ color: 0xff00ff }),
  // new THREE.MeshStandardMaterial({ color: 0xffff00}),
];
const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4);
geometry.translate(0.5, 0.5, 0.5);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xb3b3b3 });
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000021 });
const cube = new THREE.Mesh(geometry, materials);
cube.castShadow = true;
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, edgesMaterial);
scene.add(cube);

// Add a light source
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 5);
light.castShadow = true;
scene.add(light);

// Render the scene
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();