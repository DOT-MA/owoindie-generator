import * as express from "express";
import * as fs from "fs";

export const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/getpartdata/:group", (req, res) => {
    const data = [];
    for (const part of fs.readdirSync(`resources/${req.params.group}`)) {
        data.push({
            partName: part,
            partPath: `${req.params.group}/${part}`
        });
    }
    res.send(JSON.stringify(data));
});

router.post("/getallpartdata", (req, res) => {
    const data = {};
    for (const dir of fs.readdirSync("resources")) {
        data[dir] = [];
        for (const part of fs.readdirSync(`resources/${dir}`)) {
            data[dir].push({
                partName: part,
                partPath: `${dir}/${part}`
            });
        }
    }
    res.send(JSON.stringify(data));
});