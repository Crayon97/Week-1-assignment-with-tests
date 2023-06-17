## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0;

function count(){
counter++;
setTimeout(count.bind(this), 1000);
}

setTimeout(count.bind(this), 1000);

setInterval(()=>{
console.log(counter);
}, 1000);

(Hint: setTimeout)
