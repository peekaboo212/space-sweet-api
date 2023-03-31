import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';

interface RewardAttributes {
  id_reward: number;
  stars: number;
  minutes: number;
}

class Reward
  extends Model<Partial<RewardAttributes>>
  implements Partial<RewardAttributes>
{
  public id_reward!: number;
  public stars!: number;
  public minutes!: number;
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
    minutes: {
      type: DataTypes.INTEGER,
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
