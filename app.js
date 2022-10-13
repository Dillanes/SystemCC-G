const express =  require('express')
//configuation environmen variables
require('dotenv').config()

const cors = require('cors')

const  app = express()


//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

//get routes dinamic type
app.use('/api/',require(''))


module.exports = app