const mongoose = require('mongoose');
const itemsSchema = new mongoose.Schema({
    id: String,
    img: String,
    price: Number,
    type: String,
    quantity:Number
})
const orderSchema = new mongoose.Schema({
    id:String,
    items: [itemsSchema],
})
module.exports = mongoose.model('Order', orderSchema )