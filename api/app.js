const express = require("express");
const app = express();

app.listen(3005, 'localhost', (err) => {
    if(err){
        console.log("Error listening to port");
    } else{
        console.log("Listening to port: ", 3005);
        console.log("Press CTRL+C to end server");
    }
})

// const express = require("express")

// const app1 = express();

// app.get("/", (req, res) => {
//     res.json({
//         result: "home page content",
//         msg: "Successful",
//         status: true
//     })
// })

// app.listen(3005, 'localhost', (err) => {
//     if(err){
//         console.log("Error opening port");
//     } else{
//         console.log("Listening to port: 3005");
//     }
// });

