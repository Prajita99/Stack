const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use(express.json());  //application/json
app.use(express.urlencoded({extended: false}))

//mount
app.use("/api/v1", routes);

app.use((req, res, next) => {
    next({
        status: 404,
        msg: "Not found"
    }); //next middleware
});

//errror handling middleware
app.use((error, req, res, next)=>{
    let status_code = error.status|| 500;
    let msg = error.msg || error;
    res.status(status_code).json({
        msg: "msg",
        result: null,
        status: false
    })
})

app.use(router);

// const express = require("express")

// const app1 = express();

app.get("/", (req, res) => {
    res.json({
        result: "home page content",
        msg: "Successful",
        status: true
    })
})

// app.listen(3005, 'localhost', (err) => {
//     if(err){
//         console.log("Error opening port");
//     } else{
//         console.log("Listening to port: 3005");
//     }
// });

