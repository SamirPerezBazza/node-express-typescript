import express, { Express, Request, Response } from 'express';
import { configureRoutes } from './routes';

const app: Express = express();
const port = process.env.PORT || 8080;

// You can use this route to test your server
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

/*
 This function is used to configure all the routes in the application,
 you can add as many routes as you want.
 The routes are configured in the src\routes folder
 You can add a new route by creating a new folder in the src\routes folder
 and adding a new file in that folder.
*/
configureRoutes(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});