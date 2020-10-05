---
to: views/<%= name %>/src/index.tsx
---
import React from 'react';

function <%= h.inflection.capitalize(name) %>(): JSX.Element {
  return <h1>Hello World !</h1>;
}

export default <%= h.inflection.capitalize(name) %>;
