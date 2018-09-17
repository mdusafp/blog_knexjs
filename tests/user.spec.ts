import * as supertest from "supertest";
import * as faker from "faker";
import server from "../src/server";
import "mocha";


describe("#User module", function() {
    const user = {
        username: faker.internet.userName(),
        password: faker.internet.password()
    };

    it("should create new user", done => {
        supertest(server)
            .post("/signup")
            .send(user)
            .set("Accept", "application/json")
            .expect(201)
            .end(err => {
                if (err) return done(err);
                done();
            });
    });

    it("should login", done => {
        supertest(server)
            .post("/login")
            .send(user)
            .set("Accept", "application/json")
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            });
    })
});
