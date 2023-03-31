import Reward from '../models/reward.model';

export const rewardSeed = async (): Promise<void> => {
  await Reward.bulkCreate([
    {
      stars: 50,
      minutes: 60
    },
    {
      stars: 10,
      minutes: 30
    }
  ]);
};
