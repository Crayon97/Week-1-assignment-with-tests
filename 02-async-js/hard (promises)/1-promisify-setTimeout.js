/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    // var prom = new Promise()
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, n*1000);
    });
}

let promise = wait(3);

promise.then(function(number) {
    // Do something with the random number
    console.log("Reached end");
  });