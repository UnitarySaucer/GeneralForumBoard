const { Schema } = require('mongoose')

const Threads = new Schema({
  postName: { type: Schema.Types.ObjectId, ref: 'mains' },
  createdTime: { type: Schema.Types.ObjectId, ref: 'mains' },
  updatedTime: { type: Schema.Types.ObjectId, ref: 'replies' }
})

module.exports = Threads
