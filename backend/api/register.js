import {Router} from "express";
const router = Router();
import userModel from "../models/userModel.js";

router.route("/")
    .get((req, res) => {
        const username=req.body.username;
        userModel.find({_id: username}, (err, doc) => {
            console.log("Here is the doc:", doc);
            if (err) console.log("There was an error.");
            else if (doc[0]) {
                res.sendStatus(202)
                console.log("User already exists");
            }
            else {
                res.sendStatus(200);
                console.log("User doesn't exist.");
            }
        })
    })
    .post((req, res) => {
        console.log("Here is the final registering details: ", req.body)

        // const newUser=new userModel(req.body);

        
        // userModel.find({_id: username}, (err, doc) => {
        //     const newUser=new userModel({
        //         _id: username,
        //         fName: fName,
        //         sName: sName,
        //         password: password
        //     })
        //     newUser.save(err => {
        //         if (err) {
        //             console.log("There was an error registering.");
        //         }
        //         else {
        //             console.log("User saved successfully.");
        //             res.send(200)
        //         }
        //     })
        // })
    });

export default router