const app = require('express');
const app = express(); 
const routes = require("./routes/routes");

// mounting of routes
app.use(routes);

// app.js
const homeContent = (req, res) => {
    res.json({ //in json fromat because we're working with APIs
        result: "Home page content",
        msg: "Success",
        status: true
    })
}

app.use("/about", (req, res)=> {
    //executes only when your url is /about
})

// url mount
app.get("/", homeContent); 
    // res.end()
    // res.redirect()
    // res.download()
    // res.send()
    // res.sendStatus()
    // res.render()
    // res.status()
    // res.json()

app.post("/", (req, res) => { //get method
    res.json({ 
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

app.post("/product/add", (req, res) => {
    //this action can only be performed by logged in admin user
    //login chech true
        //role=>admin
            //
    res.status(401).json();
})

app.use((req, res) => {
    res.status(404).json({
        msg: "Not Found",
        result: null,
        status: false
    })
})

app.get('/product/:slug', (req, res) => {
    // let slug = req.params.slug;
    res.json({
        result: {
            param: req.params,
            query: req.query
        },
        msg: "Body",
        status: true
    })
})

module.exports = app;