const axios = require('axios')

const getAlldata = async(query) => {
    const mercadoLibreResponse = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const data = {
    response: mercadoLibreResponse.data.results.map(item =>({
    author:{
        name:'mayrene',
        lastname:'mora'
    },
    categories:[item.category_id],
    items:[
        {
        id: item.id,
        title: item.title,
        price:{
            price: item.price,
            currency: item.currency_id,
            amount: item.installments.amount
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping   
        }
    ]
    }))
    }

    return {
        data
    }
}

module.exports = {
    getAlldata
}