const axios = require('axios')

const getById = async(id, description) => {
    const endpoint = description 
    ? `https://api.mercadolibre.com/items/${id}/description`
    : `https://api.mercadolibre.com/items/${id}`

    const responseMeli = await axios.get(endpoint)
    const item = responseMeli.data

    const productData = {
        response:{
            author:{
                name:'mayrene',
                lastname:'mora'
            },
            item: {
                id: item.id,
                title: item.title,
                price:{
                    price: item.price,
                    currency: item.currency_id
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity
            }
        }
    }

    const productDescription = {
        data: {
            author:{
                name:'mayrene',
                lastname:'mora'
            },
            description: item.plain_text
        }
    }

    const dataProduct = description ? productDescription : productData

    return {
        dataProduct
    }
}

module.exports = {
    getById
}