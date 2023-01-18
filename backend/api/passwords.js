import {Router} from "express";
const router = Router();
import passModel from "../models/passModel.js";

router.route("/")
    .get((req, res) => {
        passModel.find((err, passwords) => {
            if (err) {
                console.log("There was an error.")
                console.log(err);
            }
            else {
                res.send(passwords);
            }
        })
    })
    .post((req,res) => {
        const newPass = new passModel({
            title: req.body.title,
            URL: req.body.URL,
            password: req.body.password,
            userID: req.body.userID
        })
        newPass.save(err => {
            if (err) {
                res.send("There was an error.");
                console.log(err);
            }
            else {
                res.send("You password has successfully been saved!");
            }
        })
    })

export default router