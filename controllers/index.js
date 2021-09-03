const { Main, Reply, Thread } = require('../models/index')

const getAllMain = async (req, res) => {
  try {
    const mainPosts = await Main.find()
    // console.log(mainPosts)
    res.status(200).json(mainPosts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createMain = async (req, res) => {
  try {
    const newMain = await new Main(req.body)
    await newMain.save()
    return res.status(201).json({ newMain })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const deleteMain = async (req, res) => {
  try {
    const deleted = await Main.deleteOne({ ObjectId: req.params })
    res.status(201).json({ deleted })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getAllReplies = async (req, res) => {
  try {
    const replies = await Reply.find()
    res.status(200).json({ replies })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createReply = async (req, res) => {
  try {
    const newReply = await new Reply(req.body)
    await newReply.save()
    res.status(200).json({ newReply })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const deleteReply = async (req, res) => {
  try {
    const deleted = await Reply.deleteOne({ ObjectId: req.params })
    res.status(200).json({ deleted })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = {
  getAllMain,
  createMain,
  deleteMain,
  getAllReplies,
  createReply,
  deleteReply
}
