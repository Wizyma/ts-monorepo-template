---
to: packages/<%= name %>/tsconfig.json
---
{
  "extends": "../../configurations/typescript/tsconfig.react.json",
  "compilerOptions": {
    "outDir": "dist/lib",
    "declaration": true,
    "declarationDir": "dist",
    "rootDir": "src",
    "skipLibCheck": true,
    "baseUrl": "src",
    "paths": {
      "*": ["*"]
    }
  },
  "include": ["src"],
  "exclude": ["src/__tests__", "build", "src/*/__tests__", "node_modules"]
}
