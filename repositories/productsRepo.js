const ProductSchema = require('../schemas/productSchema');

class ProductsRepo {
    constructor(){
      this.productSchema = ProductSchema;
    }
    async addProduct(data){
       const response = await this.productSchema.create(data);
       return response;
    }

    async getProducts(page,limit){
      page = parseInt(page);
     limit = parseInt(limit);
    const skipIndex = (page - 1) * limit;
    const  results = await this.productSchema.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
        return results;
    }
}
module.exports = ProductsRepo;