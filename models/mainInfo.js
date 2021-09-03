const { Schema } = require('mongoose')

const MainInfo = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
    createdTime: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = MainInfo
