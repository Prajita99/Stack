const http = require("http")
//http, https
// TCP/IP

//request must respond
const app = http.createServer((req, res) => {
    // url ====> endpoints/ API
    let url = req.url;
    let method = req.method;
    if(url=== '/' && method === 'GET'){
        res.end(JSON.stringify({
            banner: [],
            product: [],
            user: []
        }))
    } else if(url=== '/register' && method === 'POST'){
        res.end(JSON.stringify({
            banner: [],
            product: [],
            user: []
    }))
 } else{
        res.end(JSON.stringify({
            status: 404,
            msg: "Not Found"
        }))
    }
    res.end("Hello World");
});

//protocol://domain:port/param/param?query=value

//http -> 80
//https => 443
//smtp => 25
//ftp => 21
//sftp => 22
//0-2^16 -1 //port addresses
// well known ports(0-1023)
// 127.0.0.1, ::1, localhost
app.listen(3005, 'localhost', (err) => {
    if(err){
        console.log("Error listening to port 3005");
    } else{
        console.log("Server is listening to port: 3005");
        console.log("Press CTRL+C to end server");
    }
});

//API Dev
// Data Database ====> Server =====> Client

// url 
    // method, body, param, query, endpoint

    //http://localhost:3005/login, get

// API way => REST API(Representational Stateless Transfer)
//         => SOAP API  

// get(fetch), post(API call), put(update), patch(update), delete
// CRUD => Create, Read, Update, Delete

//Every endpoint you define is known as route