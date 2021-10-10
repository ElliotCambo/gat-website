var express = require("express");
// const bodyParser = require('body-parser');
var mysql = require("mysql");
var postmark = require("postmark");
var app = express();
var router = express.Router();
var pathToGATWebsiteStatic = __dirname + '/public/';
const uuidv4 = require('uuid/v4');

app.use("/gat", express.static(pathToGATWebsiteStatic));
app.use(express.json());

router.get("/*",function(req,res){
        console.log(pathToGATWebsiteStatic + "index.html")
        res.sendFile(pathToGATWebsiteStatic + "index.html");

});

app.use("/",router);

app.listen(443,function(){
  console.log("Live at Port 80");
});
