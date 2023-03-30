import { type Request, type Response } from 'express';
import DailyEntryModel from '../models/dailyEntry.model';

const DailyEntryController = {
  getDailyTime: async (_req: Request, res: Response) => {
    const idUser: number = parseInt(_req.params.idUser);
    const data = await DailyEntryModel.getDailyTime(idUser);
    // console.log(data);
    return res.sendStatus(200).send(data);
  }
};

export default DailyEntryController;
