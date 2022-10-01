//Class and object

//Prototype based
//Class based
function User() {
  //functional constructor
  //data,
  //function/methods
  this.name = "";
  this.email = "";
}
User.prototype.getName = function () {
  return this.name;
};

let user_obj = new User("Prajita", "prajita@test.com");
// user_obj.name = "Prajita";
// user_obj.email = "prajita@test.com";

console.log(user_obj.getName());
