import {Router} from "express";
const router = Router();
import userModel from "../models/userModel.js";

router.route("/")
    .post((req, res) => {
        const username=req.body.username;
        const password=req.body.password;

        userModel.find({_id: username}, function(err, doc) {
            if (err) {
                console.log("There was an error.")
            }
            else if (doc[0]) {
                console.log("user Found.");
                if (password===doc[0].password) {
                    console.log("You are successfully logged in.");
                }
                else {
                    console.log("Incorrect password. Please re-try.")
                }
            }
            else {
                console.log("User Not found. Please register.")
            }
        })
    });

export default router