import * as express from "express";
import * as fs from "fs";
import * as request from "request-promise";

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

router.post("/senddiscordwebhook", async (req, res) => {
    const response = await request.post("https://api.imgur.com/3/upload", {
        method: "POST",
        headers: {
            Authorization: `Client-ID ${process.env.IMAGUR_ID}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
    });
    const imagurData = JSON.parse(response).data;
    const embedData = {
        username: "OWOINDIE",
        avatar_url: "https://raw.githubusercontent.com/DOT-MA/dotma-resources/master/images/alex/owoindie.jpg",
        embeds: [
            {
                title: "OWO WHAT'S THIS",
                description: "WHO DID THIS LMAO!!",
                url: "https://owoindie-generator.herokuapp.com/",
                image: {
                    url: imagurData.link,
                },
                timestamp: new Date(),
            }
        ]
    }
    request.post(process.env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(embedData),
    });

})
