const express = require('express')
const {
  getClients,
  createClient,
} = require('../controllers/clients.controller')

const router = express.Router()

router.get('/', getClients)
router.post('/', createClient)

module.exports = router