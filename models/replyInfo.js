const { Schema } = require('mongoose')

const ReplyInfo = new Schema(
  {
    content: { type: String, required: true },
    repliedTo: { type: Schema.Types.ObjectId, ref: 'Main' },
    createdTime: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = ReplyInfo
