const mongoose = require('mongoose')
const MainSchema = require('./mainInfo')
const ReplyInfo = require('./replyInfo')
const ReplySchema = require('./replyInfo')
// Set Up Models Here

const Main = mongoose.model('mains', MainSchema)
const Reply = mongoose.model('replies', ReplySchema)

module.exports = {
  // Export Models Here
  Main,
  ReplyInfo
}
