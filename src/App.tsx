// App.tsx
import React, { Suspense } from "react";
import { FallenLeavesAnimation } from "./lib";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <FallenLeavesAnimation />
      </Suspense>
    </div>
  );
};

export default App;
