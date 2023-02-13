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
                res.sendStatus(401)
                console.log("There was an error.")
            }
            else if (doc[0]) {
                console.log("user Found.");
                if (password===doc[0].password) {
                    res.status(201)
                    res.send(doc[0].publicKey)
                    // res.sendStatus(201)
                    // console.log(doc)
                    console.log("You are successfully logged in.");
                }
                else {
                    res.sendStatus(202)
                    console.log("Incorrect password. Please re-try.")
                }
            }
            else {
                res.sendStatus(203)
                console.log("User Not found. Please register.")
            }
        })
    });

export default router