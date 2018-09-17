import { Request, Response } from "express";
import { CommentRepository } from "../repositories";


export class CommentController {
    constructor(private repository: CommentRepository) {}

    add(req: Request, res: Response) {
        res.json({ message: "add" })
    }

    query(req: Request, res: Response) {
        res.json({ message: "query" });
    }

    single(req: Request, res: Response) {
        res.json({ message: "single" });
    }

    update(req: Request, res: Response) {
        res.json({ message: "update" });
    }

    delete(req: Request, res: Response) {
        res.json({ message: "delete" });
    }
}