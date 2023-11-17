import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import airplaneTextureImage from '../Image/airplaneTexture.jpg';

const AircraftModel = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create airplane geometry with texture
    const textureLoader = new THREE.TextureLoader();
    const airplaneTexture = textureLoader.load(airplaneTextureImage); // Use a different name here
    const geometry = new THREE.BoxGeometry(1, 0.2, 4);
    const material = new THREE.MeshPhongMaterial({ map: airplaneTexture });
    const airplane = new THREE.Mesh(geometry, material);
    scene.add(airplane);

    // Add a directional light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the airplane
      airplane.rotation.x += 0.005;
      airplane.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default AircraftModel;
