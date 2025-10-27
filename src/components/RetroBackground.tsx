import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const WaveShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2() },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    vec3 palette(float t) {
      vec3 a = vec3(0.5, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(0.8, 0.8, 0.8);
      vec3 d = vec3(0.0, 0.10, 0.20);
      return a + b * cos(6.28318 * (c * t + d));
    }

    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      uv.x *= uResolution.x / uResolution.y;

      vec2 mouseInfluence = (uMouse - 0.5) * 2.0;
      float distToMouse = length(uv - mouseInfluence);

      float wave1 = sin(uv.x * 3.0 + uTime * 0.5 + distToMouse * 2.0) * 0.5;
      float wave2 = cos(uv.y * 2.5 - uTime * 0.3 + distToMouse * 1.5) * 0.5;
      float wave3 = sin(length(uv) * 4.0 - uTime * 0.8) * 0.3;
      float ripple = sin(distToMouse * 10.0 - uTime * 2.0) * exp(-distToMouse * 2.0) * 0.5;

      float pattern = wave1 + wave2 + wave3 + ripple;
      pattern = smoothstep(-0.5, 0.5, pattern);
      float dither = noise(vUv * 150.0 + uTime * 0.1) * 0.08;
      pattern += dither;

      vec3 col = palette(pattern + uTime * 0.1);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

function AnimatedBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const material = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(WaveShader.uniforms),
      vertexShader: WaveShader.vertexShader,
      fragmentShader: WaveShader.fragmentShader,
    });
    mat.uniforms.uResolution.value.set(size.width, size.height);
    return mat;
  }, [size]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      material.uniforms.uMouse.value.set(
        event.clientX / window.innerWidth,
        1.0 - event.clientY / window.innerHeight
      );
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [material]);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime();
  });

  // Perbesar bidang agar menutupi sisi kanan & kiri di semua resolusi
  const aspect = size.width / size.height;
  const width = 2.5 * aspect;
  const height = 2.5;

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[width, height]} />
    </mesh>
  );
}

export const RetroBackground = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          background: "black", // jadi fallback kalau shader belum render
        }}
      >
        <AnimatedBackground />
      </Canvas>
    </div>
  );
};
