---
to: packages/<%= name %>/src/index.ts
---
function hello(name: string): string {
  return `Hello ${name}`;
}

export default hello;
