
const { v4: uuidv4 } = require('uuid');
const CategoriesRepo = require('../repositories/categoriesRepo');

module.exports = {
    addCategoryService: async function (body){
    console.log(body);
    if(!body || !body.type || !body.name) {
        return {
            error: true,
            message: 'Incomplete input'
        }
    }
    const data = {...body};
    data['id'] = uuidv4();  
    const categoriesRepo = new CategoriesRepo();
    const res = await categoriesRepo.addCategory(data);
    return {
        error: false,
        data: res
    }
},
getCategoryService: async function (page,limit){

    if(!limit || !page) {
        return {
            error: true,
            message: 'Incomplete input'
        }
    }

    const categoriesRepo = new CategoriesRepo();
    const res = await categoriesRepo.getCategories(page,limit);
    return {
        error: false,
        data: res
    }
}
}