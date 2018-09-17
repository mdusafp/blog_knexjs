require("dotenv").config();

import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as routes from "./routes";

import {
    CommentController,
    PostController,
    UserController
} from "./controllers";

import {
    CommentRepository,
    PostRepository,
    UserRepository
} from "./repositories";


const app = express();
const env = process.env.NODE_ENV || "development";
const config = require("../knexfile")[env];
const knex = require("knex")(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use(routes.commentRouter(new CommentController(new CommentRepository(knex, "comment"))));
app.use(routes.postRouter(new PostController(new PostRepository(knex, "post"))));
app.use(routes.userRouter(new UserController(new UserRepository(knex, "user"))));

app.get("/", (req, res) => {
    res.send("Hello boys");
});

export default app;
