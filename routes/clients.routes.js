const express = require('express')
const {
  getClients,
  createClient,
} = require('../controllers/clients.controller')
const { validateClient } = require('../middlewares/validation.middleware')

const router = express.Router()

router.get('/', getClients)
router.post('/', validateClient, createClient)

module.exports = router