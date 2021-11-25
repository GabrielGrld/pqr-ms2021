//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
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
  user: String,   // Usuario que realizá la PQR
  product_id: Number,  //Producto relacionado con la PQR
  content: String,   // Contenido de la PQR
  date: {type: Date, default: Date.now }   //Fecha en la que se realiza la PQR
};

//Schema for each PQR
 const pqr = mongooe.model("pqr", pqrSchema);
