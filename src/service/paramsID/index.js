const axios = require('axios')

const getById = async(id, description) => {
    const endpoint = description 
      ? `https://api.mercadolibre.com/items/${id}/description`
      : `https://api.mercadolibre.com/items/${id}`

    const responseMeli = await axios.get(endpoint)
    const productData = responseMeli.data

    return {
        productData
    }
}

module.exports = {
    getById
}