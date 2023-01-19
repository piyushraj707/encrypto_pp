import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: String,
    password: String,
})

const user=mongoose.model("user", userSchema);
export default user