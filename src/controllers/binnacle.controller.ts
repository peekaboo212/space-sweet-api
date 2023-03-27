import { type Request, type Response } from 'express';
import BinnacleModel from '../models/binnacle.model';

const BinnacleController = {
  listPlanets: async (_req: Request, res: Response) => {
    const idUser: number = parseInt(_req.params.idUser);
    const data = await BinnacleModel.listPlanets(idUser);
    console.log(data);
    return res.status(200).send(data);
  }
};

export default BinnacleController;
