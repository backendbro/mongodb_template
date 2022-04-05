const mongoose = require('mongoose')

const connectDb = async () => {
const conn = await mongoose.connect(process.env.mongo_uri,  {
useNewUrlParser: true,
useUnifiedTopology: true
})
console.log(`mongodb connected: ${conn.connection.host}`)
}

module.exports = connectDb
