//Variables and constants
//In js even constants can be changed

//variables
let //es6
//let name = "";
//let name = "test"; //error because of recreating
name= "test"; //valid to change

//var //initial
var full_name = "";
var full_name = "test done"; //even recreating is valid for var

let a=10;
console.log(a); // 10
{
    let a=20; //anything written within the curly braces is block scope
    console.log(a); //20 //while using let, outside {} the content within the braces are blocked
}
console.log(a); //10

var b=10;
console.log(b); // 10
{
    var b=20; 
    console.log(b); //20 //while using var, outside {}, the content within the braces are not blocked
}
console.log(b); //20

//constants
const GRAVITY = 9.8;
console.log(GRAVITY);
