const express = require('express')
const router = express.Router()
const invoicesController = require('../controllers/invoices.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/', authMiddleware, invoicesController.getInvoices)
router.post('/', authMiddleware, invoicesController.createInvoice)
router.put('/:id/pay', authMiddleware, invoicesController.payInvoice)

module.exports = router