import { IRead, IWrite } from "./interfaces";
import * as knex from "knex";

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
    protected db: knex;
    protected tableName: string;

    constructor(db: knex, tableName: string) {
        this.db = db;
        this.tableName = tableName;
    }

    async create(item: T): Promise<boolean> {
        const result = await this.db(this.tableName).insert(item);
        return !!result;
    }

    async find(): Promise<T[]> {
        const result = await this.db(this.tableName).select("*");
        return result;
    }

    async findOne(id: string): Promise<T> {
        const result = await this.db(this.tableName)
            .where({ id })
            .first();
        return result;
    }

    async update(id: string, item: T): Promise<boolean> {
        const result = await this.db(this.tableName)
            .where({ id })
            .update(item);
        return result;
    }

    async remove(id: string): Promise<boolean> {
        const result = await this.db(this.tableName)
            .where({ id })
            .del();
        return result;
    }
}