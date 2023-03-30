import Reward from '../models/reward.model';

const time1h = new Date();
time1h.setHours(1);

const time30min = new Date();
time30min.setMinutes(30);

export const rewardSeed = async (): Promise<void> => {
  await Reward.bulkCreate([
    {
      stars: 50,
      time: time1h
    },
    {
      stars: 10,
      time: time30min
    }
  ]);
};
