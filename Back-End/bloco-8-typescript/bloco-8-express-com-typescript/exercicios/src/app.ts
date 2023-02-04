import express from 'express';
import routesPost from './routes';

const app = express();

app.use(express.json());

app.use('/posts', routesPost);

export default app;