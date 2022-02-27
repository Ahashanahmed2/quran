import express from "express";
const Router = express.Router();

import { pos, f1, f2, edite, delet } from "../control/post/subject.js";

Router.post("/subject", pos);
Router.get("/subject", f1);

Router.get("/subject/:id", f2);
Router.put("/subject/edit/:id", edite);
Router.delete("/subject/delete/:id", delet);


export default Router;
