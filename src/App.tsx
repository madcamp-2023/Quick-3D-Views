// App.tsx
import React, { Suspense } from "react";

import "./App.css";
import { Spring } from "./lib";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <Spring />
      </Suspense>
    </div>
  );
};

export default App;
