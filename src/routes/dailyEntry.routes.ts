import express from 'express';
import DailyEntryController from 'src/controllers/dailyEntry.controller';

const dailyEntryRouter = express.Router();

dailyEntryRouter.get('/:idUser', DailyEntryController.getDailyTime);

export default dailyEntryRouter;
