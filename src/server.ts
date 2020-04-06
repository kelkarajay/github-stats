import express from 'express';
import { Request, Response } from 'express';

export class Server {
    public constructor() {}

    public startServer() {          
        const app = express();
        const port = process.env.PORT || '8000';

        app.get('/', (_req: Request, res: Response) => {
            return res.send('API is working 🤓');
        });

        app.listen(port, err => {
            if (err) return console.error(err);
            return console.log(`Server is listening on ${port}`);
        });
    }
};