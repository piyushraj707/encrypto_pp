import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    URL: String,
    password: String,
    userID: Number
})

const password=mongoose.model("password", passwordSchema);
export default password