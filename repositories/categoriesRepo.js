const categorySchema = require('../schemas/typeSchema');

class CategoriesRepo {
    constructor(){
      this.categorySchema = categorySchema;
    }
    addCategory(data){
       return this.categorySchema.create(data);
    }
}
module.exports = CategoriesRepo;