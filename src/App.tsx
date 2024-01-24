// App.tsx
import React, { Suspense } from "react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
    </div>
  );
};

export default App;
