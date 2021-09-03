const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/mainposts', controllers.getAllMain)
router.post('/post', controllers.createMain)
router.delete('/delete/:id', controllers.deleteMain)

router.get('/replies', controllers.getAllReplies)
router.post('/reply', controllers.createReply)
router.post('/delete_reply/:id', controllers.deleteReply)

module.exports = router
