import { type Request, type Response } from 'express';
import UserModel from '../models/user.model';

const UserController = {
  addUser: async (_req: Request, res: Response) => {
    const username: string = _req.body.username;
    const email: string = _req.body.email;
    const password: string = _req.body.password;
    const data = await UserModel.addUser(username, email, password);
    res.status(200).send(data);
  }
};

export default UserController;
