import {Router} from "express";
const router = Router();
import userModel from "../models/userModel.js";

router.route("/")
    .post((req, res) => {
        console.log(req.body)
        const username=req.body.username;
        const password=req.body.password;
        const fName=req.body.fName;
        const sName=req.body.sName;

        userModel.find({_id: username}, (err, doc) => {
            if (err) console.log("There was an error.");
            else if (doc[0]) {
                console.log("User already exists please try a different username.");
            }
            else {
                const newUser=new userModel({
                    _id: username,
                    fName: fName,
                    sName: sName,
                    password: password
                })
                newUser.save(err => {
                    if (err) {
                        console.log("There was an error registering.");
                    }
                    else {
                        console.log("User saved successfully.");
                    }
                })
            }
        })
    });

export default router