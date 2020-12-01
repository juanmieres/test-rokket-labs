const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const productSchema = new Schema({
    name: String,
    location: String,
    phone: String,
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', productSchema);
