const { Schema } = require('mongoose')

const MainInfo = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdTime: { type: Date, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = MainInfo
