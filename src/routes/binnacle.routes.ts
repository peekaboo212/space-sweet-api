import express from 'express';
import BinnacleController from '../controllers/binnacle.controller';
const binnacleRouter = express.Router();

binnacleRouter.get('/:idUser', BinnacleController.listPlanets);

export default binnacleRouter;
