//Technique to handle asynchronous call
//pending
//fulfilled/rejected
//settlement

const login= () => {
        return new Promise((resolve, reject) =>{
        //login check
        let lg= true;
        //resolve();
        if(lg){
            resolve(true);
        }else{
            reject("");
        }
    })
}
console.log(login());

// let is_loading = true;
// login()
//     .then((resolve_data)=>{
//         console.log("Resolve");
//     }) //if resolve then this will be exedcuted
//     .catch((reject_data)=>{
//         console.log("Reject")
//     }) //if reject then this will be executed
//     .finally(()=>{
//         is_loading = false;
//     }) //independent of resolve & reject

const test = async()=>{
    try{let result = await login(); //await can only be used inside async call
    }catch(error){

    }
}
test();

let add=(a,b) => {
    return new Promise((res, rej)=>{
        res(a+b);
    })
}
add(10,20)
    .then((result) => {
        console.log(result);
    })
