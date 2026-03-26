const clientsService = require('../services/clients.service')

const getClients = async (req, res) => {
  const clients = await clientsService.getAllClients(req.user.id)
  res.json(clients)
}

const createClient = async (req, res) => {
  const result = await clientsService.createClient(req.user.id, req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

const updateClient = async (req, res) => {
  const result = await clientsService.updateClient(req.user.id, req.params.id, req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

const deleteClient = async (req, res) => {
  const result = await clientsService.deleteClient(req.user.id, req.params.id)

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
  updateClient,
  deleteClient,
}