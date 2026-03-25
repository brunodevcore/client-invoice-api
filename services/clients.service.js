const Client = require('../models/client.model')

const getAllClients = async () => {
  const clients = await Client.find().sort({ createdAt: -1 })
  return clients
}

const createClient = async ({ name, email }) => {
  const existingClient = await Client.findOne({ email })

  if (existingClient) {
    return {
      error: 'Client with this email already exists',
      status: 409,
    }
  }

  const newClient = await Client.create({
    name,
    email,
  })

  return {
    data: newClient,
    status: 201,
  }
}

module.exports = {
  getAllClients,
  createClient,
}