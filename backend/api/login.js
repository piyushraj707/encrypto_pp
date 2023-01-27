import {Router} from "express";
const router = Router();
import userModel from "../models/userModel.js";

router.route("/")
    .post((req, res) => {
        const username=req.body.username;
        const password=req.body.password;
        console.log("Here is the request: ", req.body)
        userModel.find({_id: username}, function(err, doc) {
            if (err) {
                res.send(401)
                console.log("There was an error.")
            }
            else if (doc[0]) {
                console.log("user Found.");
                if (password===doc[0].password) {
                    res.send(201)
                    console.log("You are successfully logged in.");
                }
                else {
                    res.send(202)
                    console.log("Incorrect password. Please re-try.")
                }
            }
            else {
                res.send(203)
                console.log("User Not found. Please register.")
            }
        })
    });

export default router