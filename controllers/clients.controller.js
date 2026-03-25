const clientsService = require('../services/clients.service')

const getClients = async (req, res) => {
  const clients = await clientsService.getAllClients()
  res.json(clients)
}

const createClient = async (req, res) => {
  const result = await clientsService.createClient(req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

module.exports = {
  getClients,
  createClient,
}