var express = require("express");
var app = express();
var https = require('https');
var fs = require('fs');
var router = express.Router();
var pathToGATWebsiteStatic = __dirname + '/public/';


var privateKey  = fs.readFileSync('/root/gat/GAT-chain/certs/gat.key', 'utf8');
var certificate = fs.readFileSync('/root/gat/GAT-chain/certs/bundle.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};


app.use("/public", express.static(pathToGATWebsiteStatic));
app.use(express.json());

const server = https.createServer(credentials, app);

router.get("/*",function(req,res){
        console.log(pathToGATWebsiteStatic + "index.html")
        res.sendFile(pathToGATWebsiteStatic + "index.html");

});

app.use("/",router);


server.listen(process.env.PORT || 443, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
