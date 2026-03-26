const authService = require('../services/auth.service')

const register = async (req, res) => {
  const result = await authService.register(req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

const login = async (req, res) => {
  const result = await authService.login(req.body)

  if (result.error) {
    return res.status(result.status).json({
      error: result.error,
    })
  }

  res.status(result.status).json(result.data)
}

module.exports = {
  register,
  login,
}