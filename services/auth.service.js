const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const register = async (data) => {
  const { name, email, password } = data

  // Validación básica
  if (!name || !email || !password) {
    return {
      error: 'Todos los campos son obligatorios',
      status: 400,
    }
  }

  // Verificar si ya existe el usuario
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    return {
      error: 'El usuario ya existe',
      status: 409,
    }
  }

  // Hashear password
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  return {
    status: 201,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  }
}

const login = async (data) => {
  const { email, password } = data

  if (!email || !password) {
    return {
      error: 'Email y password son obligatorios',
      status: 400,
    }
  }

  const user = await User.findOne({ email })

  if (!user) {
    return {
      error: 'Credenciales inválidas',
      status: 401,
    }
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return {
      error: 'Credenciales inválidas',
      status: 401,
    }
  }

  // Generar token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  return {
    status: 200,
    data: {
      token,
    },
  }
}

module.exports = {
  register,
  login,
}