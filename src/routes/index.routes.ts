import { Router } from 'express';
import binnacle from './binnacle.routes';
import user from './user.routes';
import auth from './auth.routes';
import dailyEntry from './dailyEntry.routes';
import reward from './reward.routes';

const routerAPI = Router();

routerAPI.use('/binnacle', binnacle);
routerAPI.use('/user', user);
routerAPI.use('/auth', auth);
routerAPI.use('/dailyEntry', dailyEntry);
routerAPI.use('/reward', reward);

export default routerAPI;
