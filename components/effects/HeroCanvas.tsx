"use client";

import React, { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const ShaderGradientComp = ShaderGradient as React.ComponentType<any>;

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#080807]" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
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
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
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
          positionX={0.2}
          positionY={0}
          positionZ={0}
          range="enabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.4}
          rotationX={0}
          rotationY={130}
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
