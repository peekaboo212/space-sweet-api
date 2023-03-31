import { Op } from 'sequelize';
import Reward from '@models/reward.model';

interface ErrorMessage {
  message: string;
}

const DailyEntryModel = {
  getReward: async (
    duration: number
  ): Promise<Reward | null | ErrorMessage> => {
    try {
      const reward = await Reward.findOne({
        where: {
          minutes: {
            [Op.lte]: duration
          }
        },
        order: [['minutes', 'DESC']]
      });

      return reward;
    } catch (e) {
      console.log(e);
      return { message: 'Error al encontrar usuario' };
    }
  }
};

export default DailyEntryModel;
