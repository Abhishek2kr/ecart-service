const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: String,
    type: String
});


module.exports = new mongoose.model('types', typeSchema);
