import * as crypto from "crypto";

interface IEncryptPassword {
    password: string;
    salt?: string;
}

function randomString() {
    return crypto.randomBytes(10).toString("hex");
}

export function encryptPassword({ password, salt = randomString() }: IEncryptPassword) {
    const hash = crypto
        .createHmac("sha512", salt)
        .update(password)
        .digest("hex");

    return {
        salt,
        hash
    }
}

export function comparePasswords(encryptedPassword: string, salt: string, password: string) {
    const { hash } = encryptPassword({ password, salt });
    return encryptedPassword === hash;
}