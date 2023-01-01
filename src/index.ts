import express, { Express, Request, Response } from 'express';
import { PORT } from '../utils/index.js';
import { AppDataSource } from '../database/connection.js';
const app: Express = express();
const port = PORT || 3001;

const dataSource = await AppDataSource.initialize();

app.get('/', (req: Request, res: Response) => {
  res.send('Blog API HomePage ✅');
});

// app.use('/api/v1/post', )

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
