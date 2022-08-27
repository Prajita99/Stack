class User{
    name;
    email;
    address;

    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.address = address;
    }

    // setName = function() {
    //     this.name = nam;
    // }

    getName = function() {
        return this.name;
    }
}
//objects can be created outside class beyond this scope
let usr = new User("Prajita", "prajita@test.com", "Kathmandu");
console.log(usr);