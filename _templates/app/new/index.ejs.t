---
to: apps/<%= name %>/src/index.tsx
---
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

const mountNode = document.getElementById('root');
ReactDOM.render(<App name="John Doe" />, mountNode);
