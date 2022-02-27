import express from "express";
const Router = express.Router();


import { pos, f1, f2, edite, delet } from "../control/post/quran.js";

Router.post("/quran", pos);
Router.get("/quran", f1);

Router.get("/quran/:id", f2);
Router.put("/quran/edit/:id", edite);
Router.delete("/quran/delete/:id", delet);

export default Router;
