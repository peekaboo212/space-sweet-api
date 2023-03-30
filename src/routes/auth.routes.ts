import express from 'express';
import AuthController from 'src/controllers/auth.controller';

const authRouter = express.Router();

authRouter.post('/', AuthController.logIn);

export default authRouter;
