const mongoose = require('mongoose')
const MainSchema = require('./mainInfo')
const ReplySchema = require('./replyInfo')

const Main = mongoose.model('mains', MainSchema)
const Reply = mongoose.model('replies', ReplySchema)

module.exports = {
  Main,
  Reply
}
