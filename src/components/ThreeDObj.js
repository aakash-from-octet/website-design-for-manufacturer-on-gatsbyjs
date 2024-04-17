import React from "react";
import { OBJModel } from "react-3d-viewer";

export default function ThreeDObj() {
  const modelPathobj =
    "https://octetwebsite-staging.jupiter-cdn.com/alto-images/pump.obj";
  const height = 520;
  const width = 570;
  return (
    <div className="obj-wrap">
      <OBJModel
        height={height}
        position={{ x: 300, y: 600, z: 10 }}
        scale={{ x: 0.75, y: 0.75, z: 0.75 }}
        src={modelPathobj}
        width={width}
      />
    </div>
  );
}
