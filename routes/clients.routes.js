const express = require('express')
const {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require('../controllers/clients.controller')
const { validateClient } = require('../middlewares/validation.middleware')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/', authMiddleware, getClients)
router.post('/', authMiddleware, validateClient, createClient)
router.put('/:id', authMiddleware, validateClient, updateClient)
router.delete('/:id', authMiddleware, deleteClient)

module.exports = router