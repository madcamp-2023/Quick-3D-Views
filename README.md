# Quick 3D Views

<!-- PROJECT SHIELDS -->

![NPM version](https://img.shields.io/npm/v/quick-3d-views.svg?style=flat) ![NPM license](https://img.shields.io/npm/l/quick-3d-views.svg?style=flat) ![Weekly Downloads](https://img.shields.io/npm/dw/quick-3d-views?style=flat) ![types](https://img.shields.io/npm/types/quick-3d-views?style=flat)

<!-- PROJECT PICTURE -->

<div align="center">
    <img src="./quick-3d-views.png" alt="quick-3d-views">
</div>

<!-- PROJECT INTRODUCTION -->

## Introduction

Quick-3D-Views is a component-based library that helps users easily utilize 3D and interactive backgrounds. The goal of this library is to provide complex 3D scene composition and interactive features in the form of simple, intuitive components, allowing users to quickly and easily integrate 3D elements in web projects. By using Quick-3D-Views, developers can seamlessly integrate 3D content into the web environment while easily implementing a variety of interactive features that can enhance the user experience.

<hr></hr>

<!-- HOW TO INSTALL-->

## Installation

```
# NPM
npm install quick-3d-views

# YARN
yarn add quick-3d-views
```

<hr></hr>

## Quick Start

```
import { Spring, Summer, Autumn, Winter } from "quick-3d-views/src/lib"
```

<hr></hr>

## Usage

<h4 style="color: red;">ISSUE</h4>
<h5 style="color: red;">There is a problem loading files that are currently in public. If you want to use it before the problem is resolved, put the files in the public folder into the user's public folder and then use it.</h5>

```
// App.tsx
import React, { Suspense } from "react";

import "./App.css";
import { Spring, Summer, Autumn, Winter } from "quick-3d-views/src/lib";

const App: React.FC = () => {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        //* Change component you want
        <Spring />
      </Suspense>
    </div>
  );
};

export default App;
```

```
// App.css
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.anim {
  width: 100vw;
  height: 100vh;
}
```

### Spring

![Quick3DViews-Chrome2024-01-2418-14-13-ezgif com-video-to-gif-converter](https://github.com/madcamp-2023/Quick-3D-Views/assets/99087502/d319f22d-c0b4-474b-92dc-d6edf7ea9433)

### Summer

![Quick3DViews-Chrome2024-01-2418-28-30-ezgif com-video-to-gif-converter](https://github.com/madcamp-2023/Quick-3D-Views/assets/99087502/f1d60e08-749e-4c5e-9e54-652294c09898)

### Autumn

![Quick3DViews-Chrome2024-01-2502-30-24-ezgif com-video-to-gif-converter (2)](https://github.com/madcamp-2023/Quick-3D-Views/assets/99087502/2103af25-622c-4617-a2ac-96b99e536cc5)

### Winter

![Quick3DViews-Chrome2024-01-2501-49-46-ezgif com-video-to-gif-converter](https://github.com/madcamp-2023/Quick-3D-Views/assets/99087502/924ec272-e359-4ec8-afd9-e99a896d5c2f)

<hr></hr>

<!-- PROJECT CONTRIBUTORS -->

## Contributors

<table>
  <tr>
  <td align="center">
      <a href="https://github.com/Yeongjae-Kong"
        ><img
          src="https://avatars.githubusercontent.com/Yeongjae-Kong"
          width="100px;"
          alt=""
        /><br /><sub><b>공영재</b></sub></a
      ><br />
    </td>
        <td align="center">
      <a href="https://github.com/haejunejung"
        ><img
          src="https://avatars.githubusercontent.com/haejunejung"
          width="100px;"
          alt=""
        /><br /><sub><b>정해준</b></sub></a
      ><br />
    </td>
  </tr>
</table>

<hr></hr>

## License

MIT.Copyright (c) 2024 quick-3d-views
