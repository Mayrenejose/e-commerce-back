const express = require('express')
const endpointsEcommerce = require('./routes')

const app = express()
app.use(express.json())
const PORT = process.env.REACT_APP_ENV || 3000

app.use('/api/items', endpointsEcommerce)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
