const invoicesService = require('../services/invoices.service')

const getInvoices = async (req, res) => {
  const invoices = await invoicesService.getAllInvoices()
  res.json(invoices)
}

const createInvoice = async (req, res) => {
  const result = await invoicesService.createInvoice(req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

const payInvoice = async (req, res) => {
  const result = await invoicesService.payInvoice(req.params.id)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

module.exports = {
  getInvoices,
  createInvoice,
  payInvoice,
}