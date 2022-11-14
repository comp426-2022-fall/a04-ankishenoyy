import { roll } from './lib/roll.js';
import express from "express";
import minimist from "minimist";

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.urlencoded({extended: true}));

// Requirements start here
var port= args.port||5000;

app.get("/app", (req, res) => {
    res.status(200).send("200 OK");
})

var s=6;
var d=2
var r=1;

app.get("/app/roll/", (req, res) => {
    res.send(roll(s, d, r));
})


app.post("/app/roll/", (req, res) => {
     s = parseInt(req.body.sides);
     d = parseInt(req.body.dice);
     r = parseInt(req.body.rolls);
    res.send(roll(s, d, r));
})

app.get("/app/roll/:sides/", (req, res) => {
    s = parseInt(req.params.sides);
    res.send(roll(s, 2, 1));
})

app.get("/app/roll/:sides/:dice/", (req, res) => {
    s = parseInt(req.params.sides);
    d = parseInt(req.params.dice);
    res.send(roll(s, d, 1));
})

app.get("/app/roll/:sides/:dice/:rolls", (req, res) => {
    s = parseInt(req.params.sides);
    d = parseInt(req.params.dice);
    r = parseInt(req.params.rolls);
    res.send(roll(s, d, r));
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port);

