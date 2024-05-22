const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
	name: String,
	descriptions: String,
    price: Number,
})

module.exports = mongoose.model("Product", productSchema)