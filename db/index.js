const mongoose = require('mongoose')
require('dotenv').config() // Add this line

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb+srv://unitarysaucer:Forum123@forum.y1zs7.mongodb.net/Forum?retryWrites=true&w=majority'

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
