import { type Request, type Response } from 'express';
import UserModel from '../models/user.model';

const UserController = {
  addUser: async (_req: Request, res: Response) => {
    const username: string = _req.body.username;
    const email: string = _req.body.email;
    const password: string = _req.body.password;
    const user = await UserModel.addUser(username, email, password);
    res.status(200).send(user);
  },
  findGoalsUser: async (_req: Request, res: Response) => {
    const idUser: number = parseInt(_req.params.idUser);
    const data = await UserModel.findGoalsUser(idUser);
    res.status(200).send(data);
  }
};

export default UserController;
