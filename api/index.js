/**
 * In the context of the project, you shouldn't have to work on the api
 */

const express = require("express");
const data = require("./data.json");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const items = [
  {
    id: 1,
    name: "Hello World",
    description: "This is a simulation",
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(JSON.stringify({ message: "Hello World!" }));
});

app.get("/simulations", (req, res) => {
  return res.send(items);
});

app.get("/simulation/:id", (req, res) => {
  // eslint-disable-next-line eqeqeq
  const item = items.find((item) => item.id == req.params.id);
  item.data = data;
  return res.status(200).send(item);
});

app.post("/simulation", (req, res) => {
  if (!req.body) return res.status(400).send("No body provided");
  if (!req.body.name) return res.status(400).send("No name provided");
  if (!req.body.description)
    return res.status(400).send("No description provided");
  const item = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  console.log("creating simulation", item);
  items.push(item);
  return res.status(201).send(item);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
