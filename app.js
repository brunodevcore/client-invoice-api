require('dotenv').config()
const express = require('express')
const cors = require('cors')
const clientsRoutes = require('./routes/clients.routes')
const invoicesRoutes = require('./routes/invoices.routes')
const notFound = require('./middlewares/notFound.middleware')
const errorHandler = require('./middlewares/error.middleware')
const connectDB = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API running')
})

app.use('/clients', clientsRoutes)
app.use('/invoices', invoicesRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

const startServer = async () => {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

startServer()