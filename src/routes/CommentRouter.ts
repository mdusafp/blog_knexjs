import { Router } from "express";
import { CommentController } from "../controllers";


export function commentRouter(controller: CommentController) {
    return Router()
        .post("/comment", controller.add.bind(controller))
        .get("/comment", controller.query.bind(controller))
        .get("/comment/:id", controller.single.bind(controller))
        .put("/comment/:id", controller.update.bind(controller))
        .delete("/comment/:id", controller.delete.bind(controller));
}