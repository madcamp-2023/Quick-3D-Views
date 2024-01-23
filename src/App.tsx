// App.tsx
import React, { Suspense } from "react";

import { Winter } from "./lib";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <Winter />
      </Suspense>
    </div>
  );
};

export default App;
