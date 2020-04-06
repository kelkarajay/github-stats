"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./src/server");
if (!process.env.GH_TOKEN) {
    console.error("A valid Github Token must be set as an environment variable ( GH_TOKEN ).");
    process.exit(1);
}
console.log("Starting Server");
var x = new server_1.Server();
x.startServer();
