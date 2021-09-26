const CategorySchema = require('../schemas/typeSchema');

class CategoriesRepo {
    constructor(){
      this.categorySchema = CategorySchema;
    }
    async addCategory(data){
       const response = await this.categorySchema.create(data);
       return response;
    }

    async getCategories(page,limit){
      page = parseInt(page);
     limit = parseInt(limit);
    const skipIndex = (page - 1) * limit;
    const  results = await this.categorySchema.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
        return results;
    }
}
module.exports = CategoriesRepo;