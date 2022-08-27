const Hodor = () => {
    console.log("I am inside the door");

    const holdDoor = () => {
        console.log("Sorry I couldn't hold the door");
    } //'holdDoor is a func. defined inside another func so it's closure func.
    return holdDoor; //closures can only be called inside the func.
    //holdDoor();
}
//Hodor();
let result = Hodor(); //closure can be called outside their scope like this
result();