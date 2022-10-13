const app = require('./app')

const conexionDB = require('./DB/db')
const {PORT} = process.env

app.listen(PORT,()=>console.log(`Run in port ${PORT}`))