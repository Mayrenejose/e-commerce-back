const express = require('express')
const { getById } = require('../service/paramsID')
const { getAlldata } = require('../service/paramsQuery')

const router = express.Router()

router.get('/', async( req, res) => {
  try {
    const paramQuery = req.query.q

    if (paramQuery?.length === 0) {
      return res.status(400).json({ error: 'Debes proporcionar un parámetro para la consulta.' })
    }

    const allData = await getAlldata(paramQuery)
    const formattedJson = JSON.stringify( allData , null, 2)
    res.setHeader('Content-Type', 'application/json')
    res.send(formattedJson)
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' })
  }
}) 

router.get('/:id/:description?', async( req, res) => {
  try {
    const productId = req.params.id
    const description = req.params.description === 'description' ? true : false

  if (productId.length === 0) {
    return res.status(400).json({ error: 'Debes proporcionar un ID de producto.' })
  }
  const productsForId = await getById(productId, description) 

  const formatteData = JSON.stringify(productsForId , null, 2)
  res.setHeader('Content-Type', 'application/json')
  res.send(formatteData)

  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' })
  }
})


module.exports = router
