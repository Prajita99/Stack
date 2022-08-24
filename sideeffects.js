class User{
    constructor(){
        console.log("I am inside User");
    }
    //getUser = () => {
        getUser(a){
        console.log("I am inside User getUser")
    }
}

class Role extends User{ //extends is used to inherit properties of a class
    //constructor overriding
    constructor(){
        console.log("I am inside Role");
        super(); //it calls the constructor of parent class as well which is necessary while using inheritance
    }
    //method overriding is when the exact same function exists in both parent & child class
    //getUser = () => { //can't use super inside arrow function
    getUser(b){
        //this.getUser(); //creates an infinite loop in case of overriding
        super.getUser(); //prevents method overriding & displays both
        console.log("I am inside Role getUser")
    }
}//1st priority goes to child

const role = new Role();
role.getUser();

//multilevel inheritance is only possible