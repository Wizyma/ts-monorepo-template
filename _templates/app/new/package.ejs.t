---
to: apps/<%= name %>/package.json
---
{
  "name": "<%= org %>/<%= name %>",
  "version": "0.0.1",
  "description": "YOUR DESCRIPTION HERE",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "repository": "REPO URL HERE",
  "author": "AUTHOR HERE",
  "license": "UNLICENSED",
  "private": true,
  "files": [
    "dist"
  ],
  "scripts": {
    "analyze": "cross-env ANALYZER=true webpack-cli",
    "build:watch": "webpack-cli --watch",
    "build": "yarn prebuild && webpack-cli",
    "clean": "cross-env rimraf ./dist",
    "docs": "typedoc",
    "prebuild": "yarn clean",
    "start": "webpack-dev-server --hot --mode development --open"
  },
  "dependencies": {
    "react-dom": "16.13.x",
    "react": "16.13.x"
  },
  "devDependencies": {
    "@types/react-dom": "16.9.x",
    "@types/react": "^16.9.x"
  }
}