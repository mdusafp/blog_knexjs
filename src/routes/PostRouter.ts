import { Router } from "express";
import { PostController } from "../controllers";

export function postRouter(controller: PostController) {
    return Router()
        .post("/post", controller.add.bind(controller))
        .get("/post", controller.find.bind(controller))
        .get("/post/:id", controller.findOne.bind(controller))
        .put("/post/:id", controller.update.bind(controller))
        .delete("/post/:id", controller.delete.bind(controller));
}