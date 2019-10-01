// Exercise 1
var randomTime = (Math.floor(Math.random() * 11));
console.log(randomTime)

let StopWatch = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("How long has it been?");
    }, randomTime * 1000);
})
StopWatch.then((time) => {
    console.log("It's been " + randomTime + " seconds");
});

// Exercise 2

var randomTimeHare = (Math.floor(Math.random() * 11));
console.log("Hare time: " + randomTimeHare + " seconds.");

var randomTimeTortoise = (Math.floor(Math.random() * 11));
console.log("Tortoise time: " + randomTimeTortoise + " seconds.");

var hare = new Promise(function(resolve,reject) {
    setTimeout(resolve, ((randomTimeHare) * 1000), 'Hare wins!');
});


var tortoise = new Promise(function(resolve, reject) {
    setTimeout(resolve, ((randomTimeTortoise) * 1000), "Tortoise wins!");
})

Promise.race([hare, tortoise]).then(function(winner) {
   console.log(winner);
});

// Exercise 3
function logger(then) {
    console.log(then)
}