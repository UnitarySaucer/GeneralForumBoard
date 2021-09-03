const { Schema } = require('mongoose')

const ReplyInfo = new Schema(
  {
    content: { type: String, required: true },
    createdTime: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = ReplyInfo
