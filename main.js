const nat = require("./dist/index");

console.log(
  nat
    .all()
    .map(({ type, descriptor }) => `${nat.AddressType[type]} ${descriptor}`)
    .join("\n")
);
