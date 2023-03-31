import express from 'express';
import UserController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', UserController.addUser);
userRouter.get('/:idUser', UserController.findGoalsUser);
userRouter.patch('/:idUser', UserController.updateStars);

export default userRouter;
