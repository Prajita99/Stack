/**
 * 1. Arithmetic Operators 2. Assignment Operators 3. Comparision Operators(<,>,<=,>=,==,===,!=,!==)    
 * 4. Increment,Decrement Operators 5. String/Concatination Operators(+ ,)
 * 6. Logical Operators 7. Conditional oe ternary(exp ? true : false)
 * 8. Spread Operator (...)
 */

x==10; 
y=='10'; 
x==y; //== returns true(checks data)
x===y; //=== returns false(checks data type)
x!=y; //returns false(opp. of ==)
x!==y; //returns true(opp. of ===)

let first = "Prajita";
let last = "Adhikari";
first = first + " " + last; //concatination

let status = null;
status = status ? 'active' : 'inactive';

let user = {
    name: "",
    phone: 123,
    address: ""
};
let stds = {
    ...user, //'...' is spread opearator, it copies the value
    role: "",
    designation: ""
};