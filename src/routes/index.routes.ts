import { Router } from 'express';
import binnacle from './binnacle.routes';
import user from './user.routes';
import auth from './auth.routes';
import dailyEntry from './dailyEntry.routes';

const routerAPI = Router();

routerAPI.use('/binnacle', binnacle);
routerAPI.use('/user', user);
routerAPI.use('/auth', auth);
routerAPI.use('/dailyEntry', dailyEntry);

export default routerAPI;
