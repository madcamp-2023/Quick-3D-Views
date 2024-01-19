// App.tsx
import React, { Suspense } from "react";
import { RippleAnimation } from "./lib";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <RippleAnimation />
      </Suspense>
    </div>
  );
};

export default App;
