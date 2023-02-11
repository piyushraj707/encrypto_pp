import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: String,  //the username becomes _id
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    password: {type: String, required: true}
})

const user=mongoose.model("user", userSchema);
export default user