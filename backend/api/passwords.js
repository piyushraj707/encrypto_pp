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
            owner: req.body.owner,
            URL: req.body.URL,
            password: req.body.password,
            username: req.body.username,
            email: req.body.email
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

router.route("/find")
    .post((req, res) => {
        passModel.find({owner: req.body.owner}, function (err, data) {
            res.send(data)
            console.log("Here is the data for ", req.body.username, data);
        })
    })

export default router