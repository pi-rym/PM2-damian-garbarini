const express = require("express")
const router = require("./router/indexRouter")


const app = express ()

app.use(router)

module.exports = app