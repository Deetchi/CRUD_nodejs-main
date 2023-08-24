const express = require('express')
const router = express.Router()

const userController = require('../Controllers/userControl')

router.get('/',userController.allUser)
router.post('/show',userController.show)
router.post('/insertData',userController.insertData)
router.post('/update',userController.update)
router.post('/deleteuser',userController.deleteuser)

module.exports = router