"use client";

import React, { useEffect, useState, useRef } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock: This module has been deprecated")
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

const ShaderGradientComp = ShaderGradient as React.ComponentType<any>;

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  // Mouse position in normalized coordinates [-1, 1]
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  const [mouseParams, setMouseParams] = useState({
    rotationX: 0,
    rotationY: 130,
    cAzimuthAngle: 270,
    cPolarAngle: 180,
    positionX: 0.2,
    positionY: 0,
    cursorPx: { x: 50, y: 50 },
  });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] relative to viewport center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetMouse.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      // Smooth linear interpolation (lerp factor 0.05)
      const ease = 0.05;
      currentMouse.current.x +=
        (targetMouse.current.x - currentMouse.current.x) * ease;
      currentMouse.current.y +=
        (targetMouse.current.y - currentMouse.current.y) * ease;

      const mouseX = currentMouse.current.x;
      const mouseY = currentMouse.current.y;

      setMouseParams({
        // Halved mouse interaction shifts for ultra-subtle movement
        rotationX: mouseY * 6,
        rotationY: 130 + mouseX * 12.5,
        cAzimuthAngle: 270 + mouseX * 7.5,
        cPolarAngle: 180 + mouseY * 5,
        positionX: 0.2 + mouseX * 0.075,
        positionY: -mouseY * 0.075,
        cursorPx: {
          x: Math.round(((mouseX + 1) / 2) * 100),
          y: Math.round(((mouseY + 1) / 2) * 100),
        },
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#080807]" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Very subtle interactive radial spotlight overlay following cursor */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(700px circle at ${mouseParams.cursorPx.x}% ${mouseParams.cursorPx.y}%, rgba(140, 140, 115, 0.07), transparent 75%)`,
        }}
      />
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradientComp
          animate="on"
          axesHelper="off"
          brightness={1}
          cAzimuthAngle={mouseParams.cAzimuthAngle}
          cDistance={0.5}
          cPolarAngle={mouseParams.cPolarAngle}
          cameraZoom={12.49}
          color1="#080807"
          color2="#8c8c73"
          color3="#e8e8e3"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={40}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="env"
          pixelDensity={1}
          positionX={mouseParams.positionX}
          positionY={mouseParams.positionY}
          positionZ={0}
          range="enabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.4}
          rotationX={mouseParams.rotationX}
          rotationY={mouseParams.rotationY}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={4}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.2}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
          zoomOut={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

