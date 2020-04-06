"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, name, avatarUrl, numberOfFollowers) {
        this.username = username;
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.numberOfFollowers = numberOfFollowers;
    }
    return User;
}());
exports.User = User;
var UserResponse = /** @class */ (function () {
    function UserResponse() {
        this.total_count = 0;
        this.items = [];
    }
    return UserResponse;
}());
exports.UserResponse = UserResponse;
