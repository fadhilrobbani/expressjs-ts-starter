import { Response } from 'express';

const response = (
  res: Response,
  status: number,
  success: boolean,
  message: string,
  data?: {}[] | {} | null
) => {
  res.status(status).json({
    success,
    message,
    data,
  });
};

export default response;
