---
to: services/<%= name %>/nodemon.json
---
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/__tests__/*"],
  "exec": "ts-node ./src/index.ts"
}
