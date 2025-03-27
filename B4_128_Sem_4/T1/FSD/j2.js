var fs = require("fs");
fs.writeFileSync("node/x.txt", "Hello World");
fs.writeFileSync("node/x.txt", "kishan");

var data = fs.readFileSync("node/x.txt", "utf-8");

fs.appendFileSync("node/s.txt", data);

fs.unlinkSync("node/x.txt");

var data1 = fs.readFileSync("node/s.txt", "utf-8");
console.log(data1);
