import {Router} from "express";
const router = Router();
import userModel from "../models/userModel.js";

router.route("/")
    .post((req, res) => {
        const newUsername=req.body.username;
        const hisPassword=req.body.password;
        userModel.find({_id: newUsername}, function(err, doc) {
            if (err) {
                console.log("There was an error.")
            }
            else if (doc) {
                console.log("user Found.");
                console.log(doc);
                if (hisPassword===doc[0].password) {
                    console.log("pass is correct");
                }
                else {
                    console.log("Incorrect password. Please re-try")
                }
            }
            else {
                console.log("User not found.");
                const newUser=new userModel({
                    _id: newUsername,
                    password: hisPassword
                })
                newUser.save(err=>{
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("User successfully saved!")
                    }
                })
            }
        })
    });

export default router