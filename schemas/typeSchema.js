const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: String,
    type: String,
    id: String
});


module.exports = mongoose.model('types', typeSchema);
