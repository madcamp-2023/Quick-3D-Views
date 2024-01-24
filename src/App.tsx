// App.tsx
import React, { Suspense } from "react";

import "./App.css";
import { Autumn } from "./lib";

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
