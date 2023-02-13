import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: String,
    URL: String,
    password: String,
    username: {type: String, required: true},
    email: {type: String, required: true}
})

const password=mongoose.model("password", passwordSchema);
export default password