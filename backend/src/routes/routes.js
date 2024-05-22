const express = require("express")
const router = express.Router()
const Product = require("../models/productModel")

router.get("/products", async (req, res) => {
	const products = await Product.find()
	res.send(products)
})

router.post("/products", async (req, res) => {
	const post = new Product({
		name: req.body.name,
		descriptions: req.body.descriptions,
		price:req.body.price,
	})
	await post.save()
	res.send(post)
})


router.delete("/products/:id", async (req, res) => {
	try {
		await Product.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})



module.exports = router