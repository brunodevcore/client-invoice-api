const invoices = require('../data/invoices')
const clients = require('../data/clients')

const getInvoices = (req, res) => {
  const enrichedInvoices = invoices.map((invoice) => {
    const client = clients.find((client) => client.id === invoice.clientId)

    return {
      ...invoice,
      clientName: client ? client.name : 'Unknown client',
    }
  })

  res.json(enrichedInvoices)
}

const createInvoice = (req, res) => {
  const { clientId, amount } = req.body

  if (!clientId || !amount) {
    return res.status(400).json({
      error: 'clientId and amount are required',
    })
  }

  const clientExists = clients.some((client) => client.id === clientId)

  if (!clientExists) {
    return res.status(404).json({
      error: 'Client not found',
    })
  }

  const newInvoice = {
    id: invoices.length + 1,
    clientId,
    amount,
    status: 'pending',
  }

  invoices.push(newInvoice)

  res.status(201).json(newInvoice)
}

const payInvoice = (req, res) => {
  const invoiceId = Number(req.params.id)

  const invoice = invoices.find((item) => item.id === invoiceId)

  if (!invoice) {
    return res.status(404).json({
      error: 'Invoice not found',
    })
  }

  invoice.status = 'paid'

  res.json(invoice)
}

module.exports = {
  getInvoices,
  createInvoice,
  payInvoice,
}