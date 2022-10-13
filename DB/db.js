//llamado a la libreria mongoose
const mongoose = require('mongoose');

//variable que almacena la URI conexion to mongo db
var {URI} = process.env;

//function conect to db
const conexionDB = ()=>{
    mongoose.connect(URI)
    .then(res=>console.log('Conection db success 😎'))
    .catch(err=> console.log('Error conection 😪'))
}

//export conection function

module.exports = conexionDB