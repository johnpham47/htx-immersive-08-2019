// var randomized = function randomTime() {
//     var possibleTimes = 
//         [1000, 
//         2000, 
//         3000, 
//         4000, 
//         5000, 
//         6000, 
//         7000, 
//         8000, 
//         9000, 
//         10000];
            
//         return possibleTime[Math.floor(Math.random() * 1)];
    
// }
// console.log(randomized);
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

/////////

// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function(){
//       resolve("Success!"); // Yay! Everything went well!
//     }, 1000);
//   });
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
//   });