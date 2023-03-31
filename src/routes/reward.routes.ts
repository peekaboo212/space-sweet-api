import express from 'express';
import RewardController from '../controllers/reward.controller';

const rewardRouter = express.Router();

rewardRouter.get('/', RewardController.getReward);

export default rewardRouter;
