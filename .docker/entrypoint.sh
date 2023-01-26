#!/bin/bash

npm install
npm run build
# npx typorm migration:run -d dist/data-source.js
npx typeorm-ts-node-commonjs -d ./src/data-source migration:run
npm run start:dev