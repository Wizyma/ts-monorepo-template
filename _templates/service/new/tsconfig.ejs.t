---
to: services/<%= name %>/tsconfig.json
---
{
  "extends": "../../configurations/typescript/tsconfig.base.json",
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2015",
    "outDir": "dist/lib",
    "declaration": false,
    "rootDir": "src",
    "baseUrl": "src",
    "paths": {
      "*": ["*"]
    }
  },
  "include": ["src"],
  "exclude": ["src/__tests__", "build", "src/*/__tests__", "node_modules"]
}
