import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Particles = () => {
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    renderer.setClearColor(0x000000, 0); // the default
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.001,
    });

    const particlesVertices = [];
    for (let i = 0; i < 2500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      particlesVertices.push(x, y, z);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particlesVertices, 3)
    );
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    camera.position.z = 5;
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <div style={{ width: "100%", height: "100%" }} ref={sceneRef} />
    </div>
  );
};

export default Particles;
