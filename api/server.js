const express = require("express")
const PORT = process.env.PORT || 8000
const app = express()

app.get("/",(req,res)=>{
	res.send("Helloas!")
})
app.get("/api",(req,res)=>{
	console.log("/api hit!")
	res.json({data:"working"})
})

app.get("/api/1",(req,res)=>{
	console.log("/api /1 hit!")
	res.json({data:"working"})
})

app.listen(PORT,()=>console.log("Listening on port "+PORT))