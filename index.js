const { response } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const connection = require("./models/database");

//Setando o ejs como view engine
app.set("view engine","ejs");
app.use(express.static("public"));

//Usando o bodyParse para envio e recebimento de formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(request,response)=>{
    response.render("index");
})

app.listen(80,()=>{
    console.log("Servidor iniciado.");
})