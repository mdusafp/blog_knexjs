import { BaseRepository } from "./BaseRepository";
import { Post } from "../entities";

export class PostRepository extends BaseRepository<Post> {
    transaction(item1: Post, item2: Post) {
        return this.db.transaction(trx => {
            return trx
                .insert(item1)
                .into(this.tableName)
                .then(() => {
                    return trx
                        .insert(item2)
                        .into(this.tableName);
                })
                .then(trx.commit)
                .catch(trx.rollback);
        })
        .then(res => { console.log(res) })
        .catch(e => console.error(e));
    }

    map() {
        return this.db(this.tableName)
            .select("title")
            .from(this.tableName)
            .limit(10)
            .then(row => { console.log(row); return row; })
            .map((row: any) => row.title);
    }

    reduce() {
        return this.db(this.tableName)
            .select("*")
            .reduce((rows: any[], row: any) => {
                return [...rows, row.title]
            }, []);
    }
}