const Hodor = (cb) => {
  //passing a function as an argument to another function is callback
  console.log("I am inside the door");
  cb();
};
const holdDoor = (err, success) => {
  console.log("Sorry I couldn't hold the door");
};
//async
setTimeout(() => {
  console.log("I'm a delayed output");
}, 3000);

Hodor(holdDoor); //closure & callback are async handlers

//slug => unique
let getSlug = (str, counter = 0) => {
  //test, 0
  //slug
  //db slug
  let slug = "test-" + counter; //test-0
  if (counter <= 10) {
    counter++; //0<=10
    return getSlug(slug, counter); //test-0, 1 //recursive func.
  }
  return slug;
};
let slugVal = getSlug("test");
console.log(slugVal);

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; //0-11
let day = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
