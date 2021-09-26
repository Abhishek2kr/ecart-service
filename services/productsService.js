
const { v4: uuidv4 } = require('uuid');
const ProductsRepo = require('../repositories/productsRepo');

module.exports = {
    addProductService: async function (body){
    console.log(body);
    if(!body || !body.name || !body.category_id || !body.subCategory_id) {
        return {
            error: true,
            message: 'Incomplete input'
        }
    }
    const data = {...body};
    data['id'] = uuidv4();  
    const productsRepo = new ProductsRepo();
    const res = await productsRepo.addProduct(data);
    return {
        error: false,
        data: res
    }
},
getProductsService: async function (page,limit){

    if(!limit || !page) {
        return {
            error: true,
            message: 'Incomplete input'
        }
    }

    const productsRepo = new ProductsRepo();
    const res = await productsRepo.getProducts(page,limit);
    return {
        error: false,
        data: res
    }
}
}