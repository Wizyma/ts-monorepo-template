---
to: apps/<%= name %>/src/App.tsx
---
import React from 'react';

function <%= h.inflection.capitalize(name) %>({ name }: { name: string }): JSX.Element {
  return <h1>Hello {name} !</h1>;
}

export default <%= h.inflection.capitalize(name) %>;
