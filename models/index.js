const mongoose = require('mongoose')
const MainSchema = require('./mainInfo')
const ReplySchema = require('./replyInfo')
const ThreadSchema = require('./threads')
// Set Up Models Here

const Main = mongoose.model('mains', MainSchema)
const Reply = mongoose.model('replies', ReplySchema)
const Thread = mongoose.model('threads', ThreadSchema)

module.exports = {
  // Export Models Here
  Main,
  Reply,
  Thread
}
