const fs = require('fs');

var read = fs.readFileSync(process.argv[2]);
var line = read.toString().split('\n').length - 1;

console.log(line);
