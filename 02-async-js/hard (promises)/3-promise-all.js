/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, 1*1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, 2*1000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, 3*1000);
    });
}

function calculateTime() {
    const startTime = Date.now();
    let p1 = waitOneSecond();
    let p2 = waitTwoSecond();
    let p3 = waitThreeSecond();

    Promise.all([p1, p2, p3])
    .then(()=>{
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`All promises resolved in ${elapsedTime} milliseconds.`);
    })
}

calculateTime();