// App.tsx
import React, { Suspense } from "react";
import "./App.css";
import { SnowAnimation } from "./lib";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <SnowAnimation />
      </Suspense>
    </div>
  );
};

export default App;
