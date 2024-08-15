const express = require("express");
const app =express();
console.dir(app);

let port = 8080; //3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

/*app.use(( req,res)=>{
    console.log( "request received" );
    res.send({
        name :"apple",
        color:"red"

    })
    let code = "<h1>Hey! this is pmc0707 world</h1>";
    res.send(code);

});*/
/*
app.get("/", (req, res) => {
    res.send("<h1>Hey! you reach pmc0707 world</h1>");
})
app.get("/apple", (req, res) => {
    res.send("you reach apple page");
})
app.get("/banana", (req, res) => {
    res.send("you reach banana page");
})
app.get("/mango", (req, res) => {
    res.send("you reach mango page");
})

app.get("*", (req, res) => {
    res.send("<h1>ERROR! *_*</h1>");
})*/

//PATH PARAMETER
app.get("/:username/:id", (req, res) => {
    let { username , id } = req.params;
    let htmlStr =`<h1> Welcome to page of @${username}!</h1>`
    res.send(htmlStr);
})