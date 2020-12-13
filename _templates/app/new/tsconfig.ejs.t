---
to: apps/<%= name %>/tsconfig.json
---
{
  "compilerOptions": {
    "module": "ES2015",
    "outDir": "dist/lib",
    "declaration": true,
    "declarationDir": "dist",
    "rootDir": "src",
    "baseUrl": "src",
    "jsx": "react",
    "esModuleInterop": true,
    "paths": {
      "*": ["*"]
    }
  },
  "include": ["src"],
  "exclude": ["src/__tests__", "build", "src/*/__tests__", "node_modules"]
}
