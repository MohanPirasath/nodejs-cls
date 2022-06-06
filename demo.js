
const os=require("os")

console.log("hello");
const sum=(a,b)=>a+b ;
console.log(sum(2,6));

//doubleing

const double=(n)=>n*2;
console.log(double(process.argv[2]))

console.log("free mem: ",os.freemem()/1024 /1024/1024)
console.log("Total mem: ",os.totalmem()/1024 /1024/1024)
console.log("os version: ",os.version())
console.log("os processer: ",os.cpus())
