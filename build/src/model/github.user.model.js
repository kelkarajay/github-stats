"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubUserModel = /** @class */ (function () {
    function GithubUserModel() {
        this.login = "";
        this.id = 0;
        this.node_id = "";
        this.avatar_url = "";
        this.gravatar_id = "";
        this.url = "";
        this.html_url = "";
        this.followers_url = "";
        this.following_url = "";
        this.gists_url = "";
        this.starred_url = "";
        this.subscriptions_url = "";
        this.organizations_url = "";
        this.repos_url = "";
        this.events_url = "";
        this.received_events_url = "";
        this.type = "";
        this.site_admin = false;
        this.score = 0;
    }
    return GithubUserModel;
}());
exports.GithubUserModel = GithubUserModel;
var GithubUserDetailModel = /** @class */ (function () {
    function GithubUserDetailModel() {
        this.login = "";
        this.id = 0;
        this.node_id = "";
        this.avatar_url = "";
        this.gravatar_id = "";
        this.url = "";
        this.html_url = "";
        this.followers_url = "";
        this.following_url = "";
        this.gists_url = "";
        this.starred_url = "";
        this.subscriptions_url = "";
        this.organizations_url = "";
        this.repos_url = "";
        this.events_url = "";
        this.received_events_url = "";
        this.type = "";
        this.site_admin = false;
        this.name = "";
        this.company = "";
        this.blog = "";
        this.location = "";
        this.email = "";
        this.bio = "";
        this.public_repos = 0;
        this.public_gists = 0;
        this.followers = 0;
        this.following = 0;
        this.created_at = "";
        this.updated_at = "";
    }
    return GithubUserDetailModel;
}());
exports.GithubUserDetailModel = GithubUserDetailModel;
var GithubUserCollectionModel = /** @class */ (function () {
    function GithubUserCollectionModel() {
        this.total_count = 0;
        this.incomplete_results = false;
        this.items = [];
    }
    return GithubUserCollectionModel;
}());
exports.GithubUserCollectionModel = GithubUserCollectionModel;
