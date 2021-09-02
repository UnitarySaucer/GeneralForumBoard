const { Schema } = require('mongoose')

const Threads = new Schema({
  postName: { type: Schema.Types.ObjectId, ref: 'mains', required: true },
  createdTime: { type: Schema.Types.ObjectId, ref: 'mains', required: true },
  updatedTime: { type: Schema.Types.ObjectId, ref: 'replies', required: true }
})

module.exports = Threads
