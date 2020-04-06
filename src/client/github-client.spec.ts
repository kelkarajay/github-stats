import "jasmine";
import {GithubClient} from './github-client'
import { response } from "express";
import { GithubUserCollectionModel } from "../model/github.user.model";

describe("GitHub Client Tests - ", () => {
    var client : GithubClient = new GithubClient();

    it("Should instantiate server", () => {
        client.getUsersByLanguage("Go").then((response: GithubUserCollectionModel) => {
            expect(response).toBeDefined();
        });
    });
});