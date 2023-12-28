const mongoose = require('mongoose');
const prodectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Reviews:{
        type: String,
        required: true
    },
    NumberOfReviews:{
        type: Number,
        required: true
    },
    Discount:{
        type: Number,
        required: true
    },
    ReturnPolicy:{
        type: String,
        required: true
    },
    TaxStatus:{
        type: String,
        required: true
    },
    addtocart:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    imgbrand:{
        type: String,
        required: true
    },
    title_ar:{
        type: String,
        required: true
    },
    Reviews_ar:{
        type: String,
        required: true
    },
    TaxStatus_ar:{
        type: String,
        required: true
    },
    ReturnPolicy_ar:{
        type: String,
        required: true
    },
    addtocart_ar:{
        type: String,
        required: true
    },
    brand_ar:{
        type: String,
        required: true
    },
    img1:{
        type: String,
        required: true
    },
    img2:{
        type: String,
        required: true
    },
    img3:{
        type: String,
        required: true
    },
    mostpopular:{
        type: String,
        required: true
    },
    bestseller:{
        type: String,
    },
    mostpopular:{
        type: String,
    },
})
module.exports = mongoose.model('Prodect',prodectSchema )