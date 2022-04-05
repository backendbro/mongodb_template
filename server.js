const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./database/db')
const app = express()

dotenv.config({path:'./config/config.env'})
app.use(express.json())

//database connection
connectDb()

//mount the route
const bookRoute = require('./routes/book')
app.use('/api/v1/book', bookRoute)

const port = process.env.port
app.listen(port, () => {
    console.log(`port ${port} connected...`)
})
