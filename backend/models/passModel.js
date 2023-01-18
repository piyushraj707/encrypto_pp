import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    URL: String,
    password: String,
    username: String
})

const password=mongoose.model("password", passwordSchema);
export default password