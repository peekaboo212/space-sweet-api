import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';

interface RewardAttributes {
  id_reward: number;
  stars: number;
  time: Date;
}

class Reward
  extends Model<Partial<RewardAttributes>>
  implements Partial<RewardAttributes>
{
  public id_reward!: number;
  public stars!: number;
  public time!: Date;
}

Reward.init(
  {
    id_reward: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Reward',
    tableName: 'Reward'
  }
);

export default Reward;
