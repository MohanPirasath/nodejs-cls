const fs =require("fs");
 
const tr ="you done"
const tr1 =" well"
const tr2=" success"

// fs.writeFile("./good.html",tr,(err)=>console.log("done"));

// for (let i=1;i<=process.argv[2];i++){
//  fs.writeFile(`./deleteit/verygood-${i}.html`,tr,(err)=>console.log("2done"))
// }




// fs.readFile("./deleteit/verygood-1.html","utf-8",(err,data)=>{
//     if (err){
//         console.log("some Bad");
//     } else{
//         console.log(data);
//     }
// })



fs.appendFile("./deleteit/verygood-3.html",(tr1+"\n"+tr2),(err)=>console.log("vera level"))

// fs.unlink("./deleteit/verygood-6.html",(err)=>{
//     if(err){
//         console.log("yean da",err)
//     }
//     else{
//         console.log("deleted da")
//     }
// }
// )