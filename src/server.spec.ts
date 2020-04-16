import "jasmine";
import {Server} from "./server";
import http from 'http';
import { GithubClient } from "./client/github-client";


describe("Server Tests - ", () => {
    var server : Server = new Server(new GithubClient());

    beforeAll(function() {
        server.startServer();
    });

    it("Should instantiate server", () => {
        expect(server.app).toBeDefined();
    });

    it("Should bind port from env var and have healthy status for root API", () => {
        http.get("http://localhost:8000/", (response) => {
            expect(response.statusCode).toEqual(200);
        });
    });
    
    it("Should validate user search API", () => {
        http.get("http://localhost:8000/users/languages/go", (response) => {
            expect(response.statusCode).toEqual(200);
        });
    });
});