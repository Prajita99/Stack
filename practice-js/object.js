/*let user = { //anything written within the curly braces
             //in key: value format is an object
    key: 123123123,
    key_1: "value",
    object: {} //loop can't be used for objs but can be used for arrays
}*/

let user_1 = [
  {
    num: 123123123,
    key_1: "value",
    object: {},
  },
  {
    num: 456789,
    key_1: "Nothing",
    object: { 1: 7787 },
  },
]; //we keep obj inside array to use loop //Array of objects

//console.log("Num: ", user_1[1].key_1); //accessing object inside an array

let user = {
  name: "Prajita Adhikari",
  getName: function () {
    console.log("I am inside user object");
  }, //there can be function inside an object
};

user.getName;

//universal data format
let json_string = {
  //JavaScript based Object Notation
  key: "value",
}; //similar to object but key is also wrapped with ""

console.log(json_string.key); //accessing json
