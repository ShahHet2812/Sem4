const fs = require("fs");
//fs.mkdirSync("node");
fs.writeFileSync("node/rw.txt", "Hello World");
fs.appendFileSync("node/rw.txt", "\nWelcome");
