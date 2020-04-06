import express, { response } from 'express';
import { Request, Response } from 'express';
import { GithubClient } from './client.ts/github-client';

export class Server {
    public constructor() {}

    public startServer() {          
        const app = express();
        const port = process.env.PORT || '8000';

        app.get('/', (_req: Request, res: Response) => {
            return res.send('API is working 🤓');
        });

        app.get('/users/languages/:name', (_req: Request, res: Response) => {
            const client = new GithubClient();
            client.getUsersByLanguage(_req.params.name).then((response) => {
                return res.send(response);
            }).catch(() => {
                return res.send('ruh roh');
            });
        });

        app.listen(port, err => {
            if (err) return console.error(err);
            return console.log(`Server is listening on ${port}`);
        });
    }
};