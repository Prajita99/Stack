const express = require("express");

const app = express();

// url mount
app.get("/", (req, res) => { //get method
    res.json({ //in json fromat because we're working with APIs
        result: "Home page content",
        msg: "Success",
        status: true
    })
}); 

app.post("/", (req, res) => { //get method
    res.json({ //in json fromat because we're working with APIs
        result: "Home page post content",
        msg: "Success",
        status: true
    })
});
// app.post();
// app.put();
// app.patch();
// app.delete();
// app.use();

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

