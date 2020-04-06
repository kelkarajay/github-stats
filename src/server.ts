import express, { response } from 'express';
import { Request, Response } from 'express';
import { GithubClient } from './client/github-client';
import { User, UserResponse } from './model/user.model';

export class Server {
    readonly app: express.Application

    public constructor() {
        this.app = express();
    }

    public startServer() {          
        const port = process.env.PORT || '8000';

        this.app.get('/', (_req: Request, res: Response) => {
            return res.send('API is working 🤓');
        });

        this.app.get('/users/languages/:name', async (_req: Request, res: Response) => {
            const client = new GithubClient();
            
            try {
                const response = await client.getUsersByLanguage(_req.params.name);
                const payload = new UserResponse();
            ​
                await Promise.all(response.items.map(async user => {
                  const userId = user.login;
                  const userData = await client.getUserData(userId);
                  payload.items.push(new User(userId, userData.name, userData.avatar_url, userData.followers));
                }));
                
                payload.total_count = response.items.length;
            ​
                res.send(payload);
              } catch (err) {
                console.log(err);
                return res.send('ruh roh');
              }
        });

        this.app.listen(port, err => {
            if (err) return console.error(err);
            return console.log(`Server is listening on ${port}`);
        });
    }
};