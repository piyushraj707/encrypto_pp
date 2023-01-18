import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    Note: String,
    username: String
})

const note=mongoose.model("note", noteSchema);
export default note