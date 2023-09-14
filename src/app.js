const express = require('express')
const cors = require("cors")
const endpointsEcommerce = require('./routes')

const app = express()
//app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000'}))
const PORT = process.env.REACT_APP_ENV || 3001

app.use('/api/items', endpointsEcommerce)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
