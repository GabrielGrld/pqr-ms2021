//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/pqrDB');




//Model for each Article
const pqrSchema = {
  type : String,   // Type.  P: Petición, Q: Queja, R: Reclamo
  user: Number,   // Usuario que realizá la PQR
  product_id: Number,  //Producto relacionado con la PQR
  content: String,   // Contenido de la PQR
  date: {type: Date, default: Date.now }   //Fecha en la que se realiza la PQR
};

//Schema for each PQR
 const Pqr = mongoose.model("pqr", pqrSchema);
///////////////////////Request Targettomh All the PQRs ////////////////////////////

app.route("/pqr")
.get(function(req, res){
  Pqr.find(function(err, foundPQRs){
    if(!err){
      res.send(foundPQRs);
    }else{
      res.send(err);
    }
  });
}).post(  bodyParser.text({ type: ['json', 'text']}),
 function(req, res ){
   const pqrToSave = new Pqr ({
     type : JSON.parse(req.body).type,
     user: parseInt(JSON.parse(req.body).user),
     product_id: parseInt(JSON.parse(req.body).product_id),
     content: JSON.parse(req.body).content,
   });
   pqrToSave.save(function(err, result){
     if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
   });
});








 app.listen(3000, function() {
   console.log("Server started on port 3000");
 });
