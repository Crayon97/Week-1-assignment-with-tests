/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let now = new Date();
  console.log("d " + now.getMinutes() + " " + now.getSeconds() );

  let omin=now.getMinutes(), osec=now.getSeconds();

  var sum=0;
  for(let i=0;i<n;i++){
    sum += i;
  }

  now = new Date();
  console.log("Time: ", now.getMinutes() + " " + now.getSeconds());

  let nmin=now.getMinutes(), nsec=now.getSeconds();

  let timer = 0;

  if(nmin == omin){
    timer = nsec - osec;
  }
  else{
    timer = (60-osec) + nsec;

    if(nmin - omin > 1){
      timer += 60*(nmin - omin - 1);
    }
  }

  return timer;
}

calculateTime(10000000000);
