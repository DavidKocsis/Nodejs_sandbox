const express = require("express");
const bodyParser = require ("body-parser")
const dbConfig = require("./configs/database.config.js")
const mongoose = require("mongoose");
const amend = require("amend");
const diConfig ={config: require("./configs/di_config.json"),
               basePath: process.cwd()};
const di = amend.fromConfig(diConfig);

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(()=>
{
    console.log('connected to database');
}).catch(err=>{
    console.log('Could not connect to database exiting...');
    process.exit();
});


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get('/',(req,res)=> {
    res.json(({"message":"Welcome"}));
})
 
require ('./routes/notes.routes.js')(app,di.get('notes'));

app.listen(3000,()=>{
 console.log("server is listening");
})