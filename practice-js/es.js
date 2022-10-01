//ES5 -> Ecma Script
//ES6
// Import and Export

//all import
//const xyz = require("./a"); //import on ES%

// xyz.functionA()
// xyz.functionB()

//destruct
// const {functionA, functionB} = require("./a");
// functionA();

//ES6
//default import
// import * as abc from "./b";
// abc.functionA();

//named import
// import {TestClass, functionA} from "./b";
// functionA();

//Spread and Rest Operator
let user = {
  name: "",
  email: "",
  address: "",
};

let user_1 = {
  ...user,
  phone: "",
  role: "",
};

// let name = user_1.name;
// let email = user_1.email;

//object destructuring
let { email, name, ...left } = user_1; //spread operator used for the rest elements is called rest operators

// Template Literals
// Dear..... Your account has been registered,
//Please click the link below to activate your account:
//..........
let template = `Dear $(name), Your account has been registered,`; //back tick is used to interpolate variables
