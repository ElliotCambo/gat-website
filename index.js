var express = require("express");
var app = express();
var router = express.Router();
var pathToGATWebsiteStatic = __dirname + '/public/';

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
