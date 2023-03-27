import { Router } from 'express';
import binnacle from './binnacle.routes';
import user from './user.routes';

const routerAPI = Router();

routerAPI.use('/binnacle', binnacle);
routerAPI.use('/user', user);

export default routerAPI;
