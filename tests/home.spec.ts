import * as supertest from "supertest";
import server from "../src/server";
import "mocha";

describe("GET /", function() {
    it ("should return hello boys", function(done) {
        supertest(server)
            .get("/")
            .expect(200, done)
    });
});
