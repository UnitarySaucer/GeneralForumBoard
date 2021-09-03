const { Schema } = require('mongoose')

const MainInfo = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdTime: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = MainInfo
