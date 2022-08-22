//function, method, task, slicer, event, action
function addNumber(a, b) {
    c = a + b;
    return c;
    //any code written below return won't execute // as it is the last line of a function
}
const multiply = function(a, b) {
    return a*b;
}
//Synchronous call(addNumber(),multiply())
let result = addNumber(10, 20); //function call
let mul = multiply(10, 20);
console.log(result);
console.log(mul);

let showPopup1 = (e) => { //arrow notation function
    this //this => only lets us to access events bind within this func.
}
let showPopup = e => (e) //returns same value as above method
let showPopup2 = function(e) {
    this //it lets us access components outside of this func.
}
let user= {
    getUser: function() {

    },
    getName: () => {

    },
    setName: (name) => {
    }
}
user.setName("Prajita");