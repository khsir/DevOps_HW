var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
 res.send("Endpoint is live - deployment success!");
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js
