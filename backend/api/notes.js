import {Router} from "express";
const router = Router();
import noteModel from "../models/noteModel.js";

router.route("/")
    .get((req, res) => {
        noteModel.find(function(err, foundNotes) {
            res.send(foundNotes);
        })
    })
    .post((req, res) => {
        const newNote=new noteModel({
            title: req.body.title,
            Note: req.body.Note,
            userID: req.body.userID
        })
        newNote.save(err=> {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Note saved successfully.")
            }
        })
    })

export default router