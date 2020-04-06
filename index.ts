import { Server } from "./src/server";

if(!process.env.GH_TOKEN) {
    console.error("A valid Github Token must be set as an environment variable ( GH_TOKEN ).")
    process.exit(1);
}

console.log("Starting Server")
const x = new Server();
x.startServer();