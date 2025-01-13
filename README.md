# Three.js Comprehensive Guide

This guide provides a step-by-step introduction to Three.js, starting from the basics and progressing to advanced topics.

## Table of Contents

1. [Introduction to Three.js](#introduction-to-threejs)
2. [Setting Up a Three.js Project](#setting-up-a-threejs-project)
3. [Core Concepts](#core-concepts)
4. [Creating a Basic Scene](#creating-a-basic-scene)
5. [Materials and Textures](#materials-and-textures)
6. [Lighting](#lighting)
7. [Geometry and Shapes](#geometry-and-shapes)
8. [Camera Control and Animation](#camera-control-and-animation)
9. [Advanced Rendering](#advanced-rendering)
10. [Interactivity](#interactivity)
11. [Physics Integration](#physics-integration)
12. [Post-Processing](#post-processing)
13. [Optimizing Performance](#optimizing-performance)
14. [Using External Models](#using-external-models)
15. [Deploying Your Project](#deploying-your-project)

---

## 1. Introduction to Three.js

Three.js is a JavaScript library for creating 3D graphics on the web. It uses WebGL for rendering, making it accessible in modern web browsers without additional plugins.

### Why Three.js?
- Cross-browser compatibility.
- Easy to learn and integrate.
- Rich ecosystem of tools and examples.
- Handles complex 3D tasks efficiently.

### Requirements
- Basic knowledge of HTML, CSS, and JavaScript.
- Modern web browser (Chrome, Firefox, or Edge).

---

## 2. Setting Up a Three.js Project

### Installing Three.js
1. **Using npm**:
   ```bash
   npm install three
   ```
2. **Using a CDN**:
   Add this script tag in your HTML file:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/three@latest/build/three.min.js"></script>
   ```

### Project Structure
Create a folder structure like this:
```
project/
├── index.html
├── js/
│   ├── app.js
│   ├── controls.js
│   ├── utilities.js
├── assets/
│   ├── models/
│   ├── textures/
│   ├── shaders/
```

---

## 3. Core Concepts

### 3.1 The Scene
The container for all objects in your 3D world.

### 3.2 Camera
Defines what the viewer sees.
- Types: PerspectiveCamera, OrthographicCamera.

### 3.3 Renderer
Handles rendering the scene from the camera's perspective.

### 3.4 Mesh
Combines geometry (shape) and material (appearance).

---

## 4. Creating a Basic Scene

### Example Code
```javascript
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry + Material = Mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

---

## 5. Materials and Textures

### Common Materials
1. **MeshBasicMaterial** - Unaffected by light.
2. **MeshStandardMaterial** - Supports physically-based rendering.
3. **MeshPhongMaterial** - Shiny, good for metallic surfaces.

### Adding Textures
```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/textures/wood.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
```

---

## 6. Lighting

### Types of Lights
1. **AmbientLight**: Provides global illumination.
2. **PointLight**: Emits light from a point in all directions.
3. **DirectionalLight**: Simulates sunlight.
4. **SpotLight**: A cone-shaped light.

### Adding a Light
```javascript
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
```

---

## 7. Geometry and Shapes

### Built-in Geometries
1. **BoxGeometry**
2. **SphereGeometry**
3. **PlaneGeometry**
4. **TorusGeometry**

### Custom Geometry
Use `BufferGeometry` to define custom shapes.

---

## 8. Camera Control and Animation

### OrbitControls
```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const controls = new OrbitControls(camera, renderer.domElement);
```

### GSAP for Animation
```javascript
import gsap from 'gsap';
gsap.to(cube.rotation, { x: Math.PI, duration: 2 });
```

---

## 9. Advanced Rendering

### Shadows
```javascript
renderer.shadowMap.enabled = true;
cube.castShadow = true;
light.castShadow = true;
```

### Environment Maps
Use `CubeTextureLoader` to create realistic reflections.

---

## 10. Interactivity

### Raycasting
```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Update mouse coordinates on move
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Intersect objects
raycaster.setFromCamera(mouse, camera);
const intersects = raycaster.intersectObjects(scene.children);
```

---

## 11. Physics Integration

Use libraries like **Cannon.js** or **Ammo.js**.

### Cannon.js Example
```javascript
import * as CANNON from 'cannon-es';
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
```

---

## 12. Post-Processing

### Adding Effects
Use `EffectComposer` from `three/examples/jsm/postprocessing/EffectComposer`.

---

## 13. Optimizing Performance

1. Reduce polygon count.
2. Use lower-resolution textures.
3. Merge geometries.
4. Use frustum culling.

---

## 14. Using External Models

### Supported Formats
- glTF (.gltf, .glb)
- OBJ (.obj)
- FBX (.fbx)

### Loading a glTF Model
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const loader = new GLTFLoader();
loader.load('assets/models/model.glb', (gltf) => {
    scene.add(gltf.scene);
});
```

---

## 15. Deploying Your Project

### Using Vite
```bash
npm install --save-dev vite
npx vite build
```

### Hosting
Upload to services like Netlify, Vercel, or GitHub Pages.

---
