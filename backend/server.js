import express from "express";
import * as dotenv from "dotenv"; dotenv.config()
import mongoose from "mongoose";
import notes from "./api/notes.js"
import passwords from "./api/passwords.js"
import login from "./api/login.js"
import register from "./api/register.js"
import cors from "cors";
const app=express();

app.use(express.json());
app.use(cors())
const port=process.env.port;

//connect to the database
const DBPass = process.env.DB_PASS;
const mongoDBurl = "mongodb+srv://encrypto_2:"+DBPass+"@cluster0.o3s7dmp.mongodb.net/encrypto?retryWrites=true&w=majority"
mongoose.set('strictQuery', false)
mongoose
	.connect(mongoDBurl)
	.then(()=>{
		console.log("MongoDB connection established.");
	})
	.catch(()=> {
		console.log("Cannot connect to the database");
	})

//link different routes
app.use("/notes", notes);
app.use("/passwords", passwords);
app.use("/login", login);
app.use("/register", register);

//HomePage interactions
app.get("/", (req, res) =>  {
    res.send("Hi you are on the homepage.")
})

app.listen(port, () => console.log('The server is up and running on port', port))