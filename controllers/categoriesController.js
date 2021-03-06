const { addCategoryService, getCategoryService} = require('../services/categoriesService');
module.exports = {
    addCategoryController : async function(req,res){
    const body = req.body;
    const response = await addCategoryService(body);
    if(response.error == true) {
       res.status(200).json(response);
    }
    res.status(400).json(response);
   },

   getCategories : async function(req,res){
    const page = req.query.page;
    const limit = req.query.limit;
    const response = await getCategoryService(page,limit);
    console.log(response);
    if(response.error == true) {
       res.status(200).json(response);
       return;
    }
    res.status(400).json(response);
}
}