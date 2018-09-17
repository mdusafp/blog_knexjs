import { encryptPassword } from "../helpers/encrypting";

export class User {
    private username: string;
    private salt: string;
    private hash: string;

    constructor(username: string, password: string) {
        const { salt, hash } = encryptPassword({ password });
        this.username = username;
        this.salt = salt;
        this.hash = hash;
    }

    getUsername() {
        return this.username;
    }

    getHash() {
        return this.hash;
    }

    getSalt() {
        return this.salt;
    }
}