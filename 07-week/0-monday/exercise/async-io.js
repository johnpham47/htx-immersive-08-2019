const fs = require('fs');
var answer = undefined;

function async (callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        answer = fileContents.toString().split('\n').length -1;
        callback()
    });

}

function logAnswer() {
    console.log(answer);
}

async(logAnswer);