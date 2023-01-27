import express from "express";
import * as dotenv from "dotenv"
import mongoose from "mongoose";
import notes from "./api/notes.js"
import passwords from "./api/passwords.js"
import login from "./api/login.js"
import signup from "./api/signup.js"
import cors from "cors";

dotenv.config()
const app=express();
app.use(express.json());
app.use(cors())
const port=process.env.port;
const db_url=process.env.DB_URL;

//connect to the database
mongoose.set("strictQuery", true);
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.connection.once("open", () => {
    console.log("MongoDb is connected with the server.");
})

//link different routes
app.use("/notes", notes);
app.use("/passwords", passwords);
app.use("/login", login);
app.use("/signup", signup);

//HomePage interactions
app.get("/", (req, res) =>  {
    res.send("Hi you are on the homepage.")
})

app.listen(port, () => console.log('The server is up and running on port', port))