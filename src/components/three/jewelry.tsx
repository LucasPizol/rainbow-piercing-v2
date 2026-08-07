"use client";

import { useMemo } from "react";
import * as THREE from "three";

/**
 * Peças modeladas por geometria primitiva — nenhum .glb envolvido.
 * Cada uma reproduz um modelo real de joia corporal.
 */

export type FinishName = "titanio" | "ouro" | "prata";

const FINISHES: Record<
  FinishName,
  { color: string; metalness: number; roughness: number }
> = {
  titanio: { color: "#c9ccd4", metalness: 1, roughness: 0.22 },
  ouro: { color: "#e6b455", metalness: 1, roughness: 0.16 },
  prata: { color: "#e8e9ee", metalness: 1, roughness: 0.12 },
};

export const useFinish = (finish: FinishName) =>
  useMemo(() => FINISHES[finish], [finish]);

type PieceProps = {
  finish?: FinishName;
  scale?: number;
};

const Metal = ({ finish }: { finish: FinishName }) => {
  const props = useFinish(finish);
  return (
    <meshStandardMaterial
      color={props.color}
      metalness={props.metalness}
      roughness={props.roughness}
      envMapIntensity={1.6}
    />
  );
};

/** Argola de bolinha cativa — o clássico do septo e da orelha. */
export const CaptiveBeadRing = ({
  finish = "titanio",
  scale = 1,
}: PieceProps) => (
  <group scale={scale}>
    <mesh castShadow>
      <torusGeometry args={[1, 0.13, 32, 96, Math.PI * 1.72]} />
      <Metal finish={finish} />
    </mesh>
    <mesh position={[Math.cos(Math.PI * 0.86) * 1, Math.sin(Math.PI * 0.86) * 1, 0]}>
      <sphereGeometry args={[0.24, 32, 32]} />
      <Metal finish={finish} />
    </mesh>
  </group>
);

/** Argola lisa, sem emenda aparente. */
export const SeamlessRing = ({ finish = "prata", scale = 1 }: PieceProps) => (
  <mesh scale={scale} castShadow>
    <torusGeometry args={[1, 0.1, 32, 128]} />
    <Metal finish={finish} />
  </mesh>
);

/** Barbell reto — haste com esfera nas duas pontas. */
export const Barbell = ({ finish = "titanio", scale = 1 }: PieceProps) => (
  <group scale={scale} rotation={[0, 0, Math.PI / 2]}>
    <mesh castShadow>
      <cylinderGeometry args={[0.1, 0.1, 1.9, 32]} />
      <Metal finish={finish} />
    </mesh>
    {[1, -1].map((side) => (
      <mesh key={side} position={[0, side * 0.95, 0]}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <Metal finish={finish} />
      </mesh>
    ))}
  </group>
);

/** Barbell curvo — usado em sobrancelha e umbigo. */
export const CurvedBarbell = ({ finish = "ouro", scale = 1 }: PieceProps) => {
  const curve = useMemo(() => {
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.85, 0.45, 0),
      new THREE.Vector3(-0.5, -0.32, 0),
      new THREE.Vector3(0.5, -0.32, 0),
      new THREE.Vector3(0.85, 0.45, 0),
    ]);
    return new THREE.TubeGeometry(path, 64, 0.1, 20, false);
  }, []);

  return (
    <group scale={scale}>
      <mesh geometry={curve} castShadow>
        <Metal finish={finish} />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.85, 0.45, 0]}>
          <sphereGeometry args={[0.24, 32, 32]} />
          <Metal finish={finish} />
        </mesh>
      ))}
    </group>
  );
};

/** Labret com pedra — disco na base, ponto de brilho no topo. */
export const GemLabret = ({ finish = "ouro", scale = 1 }: PieceProps) => (
  <group scale={scale} rotation={[Math.PI / 2, 0, 0]}>
    <mesh castShadow>
      <cylinderGeometry args={[0.09, 0.09, 1.3, 24]} />
      <Metal finish={finish} />
    </mesh>
    <mesh position={[0, -0.65, 0]}>
      <cylinderGeometry args={[0.34, 0.34, 0.08, 32]} />
      <Metal finish={finish} />
    </mesh>
    <mesh position={[0, 0.72, 0]} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[0.3, 0.42, 8]} />
      {/* Sem transmission: refração precisa de um fundo de cena para atravessar,
          e com o canvas transparente do hero a pedra renderizava preta.
          Um metal branco iridescente devolve o brilho sem depender disso. */}
      <meshPhysicalMaterial
        color="#fdfbff"
        metalness={0.9}
        roughness={0.05}
        iridescence={1}
        iridescenceIOR={1.8}
        envMapIntensity={2.6}
      />
    </mesh>
  </group>
);
