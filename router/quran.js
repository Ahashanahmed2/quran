const express = require("express");
const Router = express.Router();

const { pos, f1,id,surah, edite, delet } = require("../control/post/quran.js");


Router.post("/", pos);
Router.get("/", f1);


Router.get("/:id", id);
Router.get("/surah/:surah", surah);
Router.put("/:id", edite);
Router.delete("/delete/:id", delet);

module.exports = Router;
