"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useRef, type ReactNode } from "react";
import * as THREE from "three";

import {
  Barbell,
  CaptiveBeadRing,
  CurvedBarbell,
  GemLabret,
  SeamlessRing,
} from "./jewelry";

/**
 * As peças flutuantes do hero. Antes eram três PNGs posicionados no CSS;
 * agora são joias reais em 3D que giram e acompanham o cursor.
 */

/** Deslocamento suave em direção ao ponteiro — o efeito de "olhar" do hero. */
const PointerParallax = ({
  strength = 0.35,
  children,
}: {
  strength?: number;
  children: ReactNode;
}) => {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    const damp = 1 - Math.pow(0.001, delta);
    group.current.position.x +=
      (pointer.x * strength - group.current.position.x) * damp;
    group.current.position.y +=
      (pointer.y * strength - group.current.position.y) * damp;
    group.current.rotation.y +=
      (pointer.x * 0.25 - group.current.rotation.y) * damp;
    group.current.rotation.x +=
      (-pointer.y * 0.2 - group.current.rotation.x) * damp;
  });

  return <group ref={group}>{children}</group>;
};

/** Rotação contínua no próprio eixo. */
const Spin = ({
  speed = 0.4,
  axis = "y",
  children,
}: {
  speed?: number;
  axis?: "x" | "y" | "z";
  children: ReactNode;
}) => {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation[axis] += speed * delta;
  });

  return <group ref={group}>{children}</group>;
};

/**
 * Ambiente de reflexo montado com lightformers — sem HDRI externo,
 * então nada de requisição de rede nem CDN para o metal reflexivo.
 */
const StudioEnvironment = () => (
  <Environment resolution={256}>
    <Lightformer
      intensity={2.6}
      position={[0, 4, 2]}
      scale={[8, 3, 1]}
      color="#ffffff"
    />
    <Lightformer
      intensity={1.8}
      position={[-4, 1, 2]}
      scale={[3, 6, 1]}
      color="#c9a7ff"
    />
    <Lightformer
      intensity={1.4}
      position={[4, -1, 2]}
      scale={[3, 6, 1]}
      color="#ffb3e6"
    />
    <Lightformer
      intensity={1.2}
      position={[0, -4, -2]}
      scale={[8, 3, 1]}
      color="#8f7fd4"
    />
  </Environment>
);

const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 6, 5]} intensity={1.1} />
    <StudioEnvironment />

    <PointerParallax>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <group position={[-3.5, 1.1, 0]} rotation={[0.4, 0.2, 0.2]}>
          <Spin speed={0.35}>
            <CaptiveBeadRing finish="titanio" scale={0.95} />
          </Spin>
        </group>
      </Float>

      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1}>
        <group position={[3.6, 1.5, -1]} rotation={[0.2, -0.3, -0.4]}>
          <Spin speed={-0.28} axis="x">
            <SeamlessRing finish="prata" scale={0.75} />
          </Spin>
        </group>
      </Float>

      <Float speed={1.7} rotationIntensity={0.4} floatIntensity={0.7}>
        <group position={[3.1, -1.6, 0.4]} rotation={[0.3, 0.4, 0.9]}>
          <Spin speed={0.45} axis="z">
            <CurvedBarbell finish="ouro" scale={0.9} />
          </Spin>
        </group>
      </Float>

      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.9}>
        <group position={[-3.2, -1.8, -0.6]} rotation={[0.6, 0.3, -0.3]}>
          <Spin speed={-0.4}>
            <Barbell finish="titanio" scale={0.8} />
          </Spin>
        </group>
      </Float>

      {/* Fora do eixo central: no meio, a peça passava por trás do selo e do
          título do hero e sujava a leitura. */}
      <Float speed={1.9} rotationIntensity={0.7} floatIntensity={1.1}>
        <group position={[-4.6, 3.1, -2.4]} rotation={[0.2, 0, 0.3]}>
          <Spin speed={0.5}>
            <GemLabret finish="ouro" scale={0.8} />
          </Spin>
        </group>
      </Float>
    </PointerParallax>
  </>
);

export const PiercingScene = () => (
  <Canvas
    camera={{ position: [0, 0, 9], fov: 40 }}
    dpr={[1, 1.75]}
    gl={{ antialias: true, alpha: true }}
    style={{ pointerEvents: "none" }}
  >
    <Scene />
  </Canvas>
);

export default PiercingScene;
