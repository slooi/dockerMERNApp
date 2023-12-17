const express = require("express")
const PORT = process.env.PORT || 8000
const app = express()
const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
	streetAddress:{
		type: String,
		required: true
	}
},{strict:true})
const ModelProperties = mongoose.model("properties",PropertySchema)


async function connectToDb(){
	console.log("Trying to connect to db")
	await mongoose.connect(`mongodb://${process.env.DB_HOST || "localhost"}:27017/metro_db`).then(res=>console.log("MONGODB CONNECTION!")).catch(err=>{throw new Error("ERROR could not connect to db!")})

	
}
connectToDb()



app.get("/",(req,res)=>{
	res.send("Helloas!")
})
app.get("/api",async (req,res)=>{
	console.log("/api hit!")
	const properties = await ModelProperties.find()
	console.log("ModelProperties.find()",properties)
	res.json({data:properties})
})

app.get("/api/1",(req,res)=>{
	console.log("/api /1 hit!")
	res.json({data:"working"})
})

app.listen(PORT,()=>console.log("Listening on port "+PORT))