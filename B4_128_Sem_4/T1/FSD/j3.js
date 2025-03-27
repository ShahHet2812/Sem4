var fs = require("fs");
// fs.mkdirSync("node");
fs.writeFileSync("node/rw.txt", "Hello World");
fs.appendFileSync("node/rw.txt", "\nWelcome");

var data = fs.readFileSync("node/rw.txt");
console.log(data);
console.log(data.toString());
fs.renameSync("node/rw.txt", "node/test.txt");
fs.unlinkSync("node/test.txt");
