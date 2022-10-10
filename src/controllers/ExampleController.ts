import { Request, Response } from 'express';
import response from 'src/util';

const getAllData = async (req: Request, res: Response) => {
  response(res, 200, true, 'ok', {});
};

export { getAllData };
