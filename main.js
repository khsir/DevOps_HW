const express = require("express");

var app = express();

app.listen(3000,(errors) => {
    if(errors) {
        console.log("Server cannot start. Error: "+errors);
    } else {
        console.log("Server started on Port:3000")
    }
});