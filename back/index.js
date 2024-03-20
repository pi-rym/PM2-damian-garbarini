require("dotenv").config()
const app = require("./src/server")
const dbConenxion = require ("./src/config/conexionDb.js")

const {PORT} = process.env

dbConenxion()
.then(() => {
    app.listen(PORT, ()=> console.log(`server en el puerto ${PORT}`))
}).catch((err) => {
    console.log("Problema con conexion a DB", err.message);
});