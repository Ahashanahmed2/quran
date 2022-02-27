import express from 'express'
const Router = express.Router();

import  {pos,f1,f2,edite,delet} from '../control/post/book.js'




Router.post("/book", pos);
 Router.get("/book", f1)

 Router.get("/book/:id", f2);
 Router.put("/book/edit/:id", edite);
 Router.delete("/book/delete/:id", delet);


export default Router;