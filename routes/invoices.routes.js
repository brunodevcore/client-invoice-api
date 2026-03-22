const express = require('express')
const {
  getInvoices,
  createInvoice,
  payInvoice,
} = require('../controllers/invoices.controller')

const router = express.Router()

router.get('/', getInvoices)
router.post('/', createInvoice)
router.put('/:id/pay', payInvoice)

module.exports = router