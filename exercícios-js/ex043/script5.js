// JSON

import { writeFileSync, readFileSync } from "node:fs";

const stringJson = readFileSync("./exercícios/ex043/newperson.json", "utf-8");

console.log(stringJson);

const Json = JSON.parse(stringJson);

console.log(Json);