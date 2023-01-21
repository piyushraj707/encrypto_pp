import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: String,
    fName: {type: String, required: true},
    sName: {type: String, required: true},
    password: {type: String, required: true}
})

const user=mongoose.model("user", userSchema);
export default user