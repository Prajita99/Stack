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

/**
 * Request ====> Middleware ====>Response
 * 
 * adding on features in the core program at any point is called middleware
 * Function in express that takes atleast 3 urls
 *  request
 *  response
 *  Next => next middleware call
 * 
 *  a, Application level middleware
 *  b. Routing level middleware
 *  c. Static middleware
 *  d. Custom middleware
 *  e. Builtin middleware
 *  f. Third party middleware
 *  g. Error handling middleware
 *  - 4 params
 *      - 1st  => error object
 *      - 2nd => request
 *      - 3rd => response
 *      - 4th => next scope
 */
const router = express.Router();

router.use('/', (req, res, next)=>{
    console.log("here")
})

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

