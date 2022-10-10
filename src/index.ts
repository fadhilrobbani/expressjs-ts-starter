import express, { Express } from 'express';
import 'dotenv/config';
import cors from 'cors';
import exampleRouter from './routers/ExampleRouter';

const port = process.env.PORT || 3001;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(exampleRouter);
app.listen(port, () => console.log(`⚡server listen port ${port} ⚡`));
