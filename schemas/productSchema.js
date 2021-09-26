const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    id: String,
    category_id: String,
    subCategory_id: String,
    details: String
});


module.exports = mongoose.model('product', productSchema);
