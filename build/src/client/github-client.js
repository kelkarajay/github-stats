"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
var baseURI = 'https://api.github.com/search/users?q=language:';
var GithubClient = /** @class */ (function () {
    function GithubClient() {
    }
    GithubClient.prototype.getUsersByLanguage = function (language) {
        var options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: '/search/users?q=language:',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Xivolkar',
                'Authorization': 'token '
            }
        };
        options.path += language;
        options.headers.Authorization += process.env.GH_TOKEN;
        return this.buildHttpRequest(options);
    };
    GithubClient.prototype.getUserData = function (username) {
        var options = {
            method: 'GET',
            hostname: 'api.github.com',
            path: '/users/',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Xivolkar',
                'Authorization': 'token '
            }
        };
        options.path += username;
        options.headers.Authorization += process.env.GH_TOKEN;
        return this.buildHttpRequest(options);
    };
    GithubClient.prototype.buildHttpRequest = function (options) {
        return new Promise(function (resolve, reject) {
            var req = https_1.default.request(options, function (response) {
                var responseBody = '';
                response.on('data', function (chunk) {
                    responseBody += chunk;
                });
                response.on('end', function () {
                    var _a;
                    if (responseBody.length && response.statusCode == 200) {
                        try {
                            resolve(JSON.parse(responseBody));
                        }
                        catch (error) {
                            reject(error);
                        }
                    }
                    else {
                        console.error('Error occurred, ', options.path, response.statusCode);
                        reject(new Error((_a = response.statusCode) === null || _a === void 0 ? void 0 : _a.toString()));
                    }
                });
            }).on('error', function (error) {
                console.log('Error occurred', error);
                reject(error);
            });
            req.end();
        });
    };
    return GithubClient;
}());
exports.GithubClient = GithubClient;
