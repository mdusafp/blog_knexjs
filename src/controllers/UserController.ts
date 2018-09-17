import { Request, Response } from "express";
import { UserRepository } from "../repositories";
import { User } from "../entities";
import { comparePasswords } from "../helpers";

export class UserController {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async signup(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = new User(username, password);
        await this.repository.create(user);
        res.sendStatus(201);
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const result = await this.repository.findByUsername(username);
        const isSamePassword = comparePasswords(result.hash, result.salt, password);
        res.json(isSamePassword);
    }

    async find(req: Request, res: Response) {
        const users = await this.repository.find();
        res.json(users);
    }

    async findOne(req: Request, res: Response) {
        const user = await this.repository.findOne(req.params.id);
        res.json(user);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { username, password } = req.body;
        const user = new User(username, password);
        const result = await this.repository.update(id, user);
        res.json(result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.repository.remove(id);
        res.json(result);
    }
}