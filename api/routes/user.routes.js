const express = require("express");
const app = express();
const router = express.Router();

const loginCheck = (req, res, next) => {
    next();
}
const isAdmin= (req, res, next) => {
    next();
}
const userList = (req, res, next) => {
    res.status(400).json(); //controller action
}
//User
// /user
router.get("/", loginCheck, isAdmin, userList);

// (req, res, next) => {
//     //list all users
//     next(); //res.json() if this is written instead of next the rest of the code wont execute
// }), (req, res, next) => {
//     //role checked
//     next();
// }, (req, res, next) => {
//     // finally list users
// };


router.post("/user", (req, res, next) => {
    //logged in
    //user register
    //form data receive
    //variable
    //db variable
    //query
    //response
       //res.status(400).json();
    next({
        status: 400,
        msg: {
            email: "Invalid email"
        }
    });
})

module.exports = app;