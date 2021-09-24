const addCategoryService = require('../services/categoriesService');
module.exports = function addCategoryController(req,res){
    const body = req.body;
    const response = addCategoryService(body);
    if(response.error == true) {
       res.status(200).json(response);
    }
    res.status(400).json(response);
}