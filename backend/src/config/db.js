const express = require("express")
const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://mi7nfqh6b:heisenberg@cluster0.lns9tg2.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0", )
	.then(() => {
		console.log("salam")
	})