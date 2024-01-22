// App.tsx
import React, { Suspense } from "react";
import { Summer } from "./lib";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <Summer />
      </Suspense>
    </div>
  );
};

export default App;
