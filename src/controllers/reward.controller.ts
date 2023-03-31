import { type Request, type Response } from 'express';
import RewardModel from '../models/reward.model';

const RewardController = {
  getReward: async (_req: Request, res: Response) => {
    const duration: number = parseInt(_req.body.duration);
    const data = await RewardModel.getReward(duration);
    res.status(200).send(data);
  }
};

export default RewardController;
