import { Server } from "./src/server";
import { GithubClient } from "./src/client/github-client";

if(!process.env.GH_TOKEN) {
    console.error("A valid Github Token must be set as an environment variable ( GH_TOKEN ).")
    process.exit(1);
}

console.log("Starting Server")
const githubClient = new GithubClient();
const x = new Server(githubClient);
x.startServer();