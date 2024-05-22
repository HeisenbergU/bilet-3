const express = require("express")
require ('./src/config/db')
const routes = require("./src/routes/routes")

const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())
app.use(express.json())

app.use("/api", routes) // new

app.listen(5000, () => {
	console.log("Server has started!")
})
