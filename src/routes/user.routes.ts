import express from 'express';
import UserController from 'src/controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', UserController.addUser);

export default userRouter;
