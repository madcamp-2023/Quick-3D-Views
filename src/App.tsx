// App.tsx
import React, { Suspense } from "react";

import { Autumn } from "./lib";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <Autumn />
      </Suspense>
    </div>
  );
};

export default App;
