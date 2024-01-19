// App.tsx
import React, { Suspense } from "react";

import AnimationCanvas from "./AnimationCanvas";

const SnowAnimation: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
};

export default SnowAnimation;
