import express from 'express';
import { getAllData } from 'src/controllers/ExampleController';

const exampleRouter = express.Router();
exampleRouter.get('/api', getAllData);

export default exampleRouter;
