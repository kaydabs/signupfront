const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./route/route.js')
const cors = require('cors')

dotenv.config()

mongoose.connect("mongodb+srv://Ghanaian:Ghanaian@cluster0.qxb10.mongodb.net/mytable?retryWrites=true&w=majority", () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routeUrls)
app.listen(4000, () => console.log("server is up and running"))