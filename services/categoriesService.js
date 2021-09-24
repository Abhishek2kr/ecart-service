
const CategoriesRepo = require('../repositories/categoriesRepo');

module.exports = function addCategoryService(body){
    console.log(body);
    if(!body || !body.type || !body.name) {
        return {
            error: true,
            message: 'Incomplete input'
        }
    }  
    const categoriesRepo = new CategoriesRepo();
    const res = categoriesRepo.addCategory(body);
    return {
        error: false,
        data: res
    }
}