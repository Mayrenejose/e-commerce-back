const axios = require('axios')

const getAlldata = async(query) => {
    const mercadoLibreResponse = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const items = mercadoLibreResponse.data.results
    return {
        items
    }
}

module.exports = {
    getAlldata
}