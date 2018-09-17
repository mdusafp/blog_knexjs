import { BaseRepository } from "./BaseRepository";
import { User } from "../entities";

export class UserRepository extends BaseRepository<User> {
    async findByUsername(username: string) {
        const result = await this.db(this.tableName)
            .where({ username })
            .first();
        return result;
    }
}