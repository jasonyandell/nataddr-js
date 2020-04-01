#!/usr/bin/env node
const nat = require("./dist/index.js");

console.log(
  nat
    .all()
    .map(({ type, descriptor }) => `${nat.AddressType[type]} ${descriptor}`)
    .join("\n")
);
