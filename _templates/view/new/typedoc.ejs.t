---
to: views/<%= name %>/typedoc.json
---
{
  "out": "../../docs/<%= name %>",
  "tsconfig": "./tsconfig.json",
  "exclude": "/src/__tests__/**/*",
  "ignoreCompilerErrors": true
}