import express, { Express, Request, Response } from 'express';
import { PORT } from '../utils/index.js';
const app: Express = express();
const port = PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Blog API HomePage ✅');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
