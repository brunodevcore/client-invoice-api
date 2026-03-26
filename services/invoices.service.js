const Invoice = require('../models/invoice.model')
const Client = require('../models/client.model')

const getAllInvoices = async (userId) => {
  const invoices = await Invoice.find({ userId })
    .populate('clientId', 'name email')
    .sort({ createdAt: -1 })

  const enrichedInvoices = invoices.map((invoice) => ({
    _id: invoice._id,
    clientId: invoice.clientId?._id || null,
    clientName: invoice.clientId?.name || 'Unknown client',
    clientEmail: invoice.clientId?.email || null,
    amount: invoice.amount,
    status: invoice.status,
    createdAt: invoice.createdAt,
    updatedAt: invoice.updatedAt,
  }))

  return enrichedInvoices
}

const createInvoice = async (userId, { clientId, amount }) => {
  const clientExists = await Client.findOne({ _id: clientId, userId })

  if (!clientExists) {
    return {
      error: 'Client not found',
      status: 404,
    }
  }

  const newInvoice = await Invoice.create({
    userId,
    clientId,
    amount,
    status: 'pending',
  })

  return {
    data: newInvoice,
    status: 201,
  }
}

const payInvoice = async (userId, id) => {
  const invoice = await Invoice.findOne({ _id: id, userId })

  if (!invoice) {
    return {
      error: 'Invoice not found',
      status: 404,
    }
  }

  invoice.status = 'paid'
  await invoice.save()

  return {
    data: invoice,
    status: 200,
  }
}

module.exports = {
  getAllInvoices,
  createInvoice,
  payInvoice,
}