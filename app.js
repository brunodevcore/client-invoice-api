const express = require('express')
const cors = require('cors')
const clientsRoutes = require('./routes/clients.routes')
const invoicesRoutes = require('./routes/invoices.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/invoices', invoicesRoutes)

app.get('/', (req, res) => {
  res.send('API running')
})

app.use('/clients', clientsRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})