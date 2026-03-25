const express = require('express')
const {
  getInvoices,
  createInvoice,
  payInvoice,
} = require('../controllers/invoices.controller')
const { validateInvoice } = require('../middlewares/validation.middleware')

const router = express.Router()

router.get('/', getInvoices)
router.post('/', validateInvoice, createInvoice)
router.put('/:id/pay', payInvoice)

module.exports = router