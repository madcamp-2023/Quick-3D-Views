// App.tsx
import React, { Suspense } from "react";
import "./App.css";
import { RainAnimation } from "./lib";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <RainAnimation />
      </Suspense>
    </div>
  );
};

export default App;
