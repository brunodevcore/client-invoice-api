const clients = require('../data/clients')

const getClients = (req, res) => {
  res.json(clients)
}

const createClient = (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      error: 'Name and email are required',
    })
  }

  const newClient = {
    id: clients.length + 1,
    name,
    email,
  }

  clients.push(newClient)

  res.status(201).json(newClient)
}

module.exports = {
  getClients,
  createClient,
}