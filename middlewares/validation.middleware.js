const validateClient = (req, res, next) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      error: 'Name and email are required',
    })
  }

  next()
}

const validateInvoice = (req, res, next) => {
  const { clientId, amount } = req.body

  if (!clientId || !amount) {
    return res.status(400).json({
      error: 'clientId and amount are required',
    })
  }

  next()
}

module.exports = {
  validateClient,
  validateInvoice,
}