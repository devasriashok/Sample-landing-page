var express = require("express");
var app = express();
var routing=require('./router.js');
app.use('/',routing);
app.listen(8500);
console.log("Server started...");