import { type Request, type Response } from 'express';
import AuthModel from '../models/auth.model';

const AuthController = {
  logIn: async (_req: Request, res: Response) => {
    const email: string = _req.body.email;
    const password: string = _req.body.password;
    const validation = await AuthModel.logIn(email, password);
    res.status(200).send(validation);
  }
};

export default AuthController;
