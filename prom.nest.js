let func1 = () => {
    return new Promise((res, rej) => {
        let a = true;
        if(a){
            res("Resolve of 1")
        }else{
            rej("Reject of 1")
        }
    })
}

let func2 = () => {
    return new Promise((res, rej) => {
        let b = true;
        if(b){
            res("Resolve of 2")
        }else{
            rej("Reject of 2")
        }
    })
}

let func3 = () => {
    return new Promise((res, rej) => {
        let c = true;
        if(c){
            res("Resolve of 3")
        }else{
            rej("Reject of 3")
        }
    })
}

// func1()
// .then((res_data) => {
//     console.log(res_data);

//     func2()
//     .then((res_data_2) => {
//         console.log(res_data_2);

//         func3()
//         .then((res_data_3) => {
//             console.log(res_data_3);
//         })
//         .catch((rej_data_3) => {
//             console.log(rej_data_3);
//         })
//     })
//     .catch((rej_data_2) => {
//         console.log(rej_data_2);
//     })
// })
// .catch((rej_data) => {
//     console.log(rej_data);
// })


//we can do chaining as below instead of nesting for readability
// func1()
// .then((res_1) => {
//     console.log(res_1);
//     return func2();
// })
// .then((res_2) => {
//     console.log(res_2);
//     return func3();
// })
// .then((res_3) => {
//     console.log(res_3);
// })
// .catch((rej)=>{
//     console.log(rej);
// })

//Promise.all([func1(),func2(),func3()]) //can be used to handle independent func at once
Promise.allSettled([func1(),func2(),func3()]) //we use this for individual results so all will not be rej if one is
.then((res)=>{
    console.log("Res: ", res);
})
.catch((rej)=>{
    console.log("Rej: ", rej);
})