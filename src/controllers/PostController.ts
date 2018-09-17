import { Request, Response } from "express";
import { PostRepository } from "../repositories";
import { Post } from "../entities";

export class PostController {
    constructor(private repository: PostRepository) {}

    async add(req: Request, res: Response) {
        await this.repository.transaction(
            new Post("title1", "description1", "1"),
            new Post("alert1", "aaaaalert2", "1")
        );
        res.json({ message: "add" });
    }

    async find(req: Request, res: Response) {
        const mappedTitles = await this.repository.map();
        const reducedTitles = await this.repository.reduce();
        res.json({ mappedTitles, reducedTitles });
    }

    findOne(req: Request, res: Response) {
        res.json({ message: "single" });
    }

    update(req: Request, res: Response) {
        res.json({ message: "update" });
    }

    delete(req: Request, res: Response) {
        res.json({ message: "delete" });
    }
}