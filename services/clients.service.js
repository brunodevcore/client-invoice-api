const Client = require('../models/client.model')
const Invoice = require('../models/invoice.model')

const getAllClients = async (userId) => {
  const clients = await Client.find({ userId }).sort({ createdAt: -1 })
  return clients
}

const createClient = async (userId, { name, email }) => {
  const existingClient = await Client.findOne({ userId, email })

  if (existingClient) {
    return {
      error: 'Client with this email already exists',
      status: 409,
    }
  }

  const newClient = await Client.create({
    userId,
    name,
    email,
  })

  return {
    data: newClient,
    status: 201,
  }
}

const updateClient = async (userId, clientId, { name, email }) => {
  const client = await Client.findOne({ _id: clientId, userId })

  if (!client) {
    return {
      error: 'Client not found',
      status: 404,
    }
  }

  const existingClientWithEmail = await Client.findOne({
    userId,
    email,
    _id: { $ne: clientId },
  })

  if (existingClientWithEmail) {
    return {
      error: 'Client with this email already exists',
      status: 409,
    }
  }

  client.name = name
  client.email = email

  await client.save()

  return {
    data: client,
    status: 200,
  }
}

const deleteClient = async (userId, clientId) => {
  const client = await Client.findOne({ _id: clientId, userId })

  if (!client) {
    return {
      error: 'Client not found',
      status: 404,
    }
  }

  const relatedInvoices = await Invoice.findOne({ userId, clientId })

  if (relatedInvoices) {
    return {
      error: 'Cannot delete a client with invoices',
      status: 409,
    }
  }

  await Client.deleteOne({ _id: clientId, userId })

  return {
    data: {
      message: 'Client deleted successfully',
    },
    status: 200,
  }
}

module.exports = {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
}