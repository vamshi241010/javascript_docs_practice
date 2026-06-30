// console.log("hello i am vamshi");
// alert("I'm JavaScript!");

const readline = require("readline");
const r1 = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
r1.question("Enter Your name: ",(name)=>{
console.log(name)
r1.close()

