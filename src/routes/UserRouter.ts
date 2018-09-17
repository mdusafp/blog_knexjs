import { Router } from "express";
import { UserController } from "../controllers";

export function userRouter(controller: UserController) {
    return Router()
        .post("/signup", controller.signup.bind(controller))
        .post("/login", controller.login.bind(controller))
        .get("/user", controller.find.bind(controller))
        .get("/user/:id", controller.findOne.bind(controller))
        .put("/user/:id", controller.update.bind(controller))
        .delete("/user/:id", controller.delete.bind(controller));
}