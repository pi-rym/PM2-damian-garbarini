require("dotenv").config()
const mongoose = require("mongoose")

const {URI}= process.env

/* const URI= "mongodb+srv://damiangarbarini:zczpiorwqIZ9eyQt@cluster0.awucvpy.mongodb.net/MovieDB?retryWrites=true&w=majority&appName=Cluster0" */

const dbConenxion = async ()=>{
    await mongoose.connect(`${URI}`)
}

module.exports =  dbConenxion 