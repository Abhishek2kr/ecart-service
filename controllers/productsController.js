const { addProductService, getProductsService} = require('../services/productsService');
module.exports = {
    addProductController : async function(req,res){
    const body = req.body;
    const response = await addProductService(body);
    if(response.error == true) {
       res.status(200).json(response);
    }
    res.status(400).json(response);
   },

   getProductsController : async function(req,res){
    const page = req.query.page;
    const limit = req.query.limit;
    const response = await getProductsService(page,limit);
    console.log(response);
    if(response.error == true) {
       res.status(200).json(response);
       return;
    }
    res.status(400).json(response);
}
}