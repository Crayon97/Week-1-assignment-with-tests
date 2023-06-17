## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

var pather = 'roshan.txt'

var content = fs.readFile(pather, 'utf8', (err, data)=>{
  console.log("Data: " + data);
});

console.log("Content: " + content);

for(var i=0;i<10000000000000;i++){
}
