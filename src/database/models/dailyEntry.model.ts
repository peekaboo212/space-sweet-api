import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';
import User from './user.model';

interface DailyEntryAttributes {
  day: Date;
  start_time: Date;
  ending_time: Date;
  id_user: number;
}

class DailyEntry
  extends Model<DailyEntryAttributes>
  implements DailyEntryAttributes
{
  public day!: Date;
  public start_time!: Date;
  public ending_time!: Date;
  public id_user!: number;
}

DailyEntry.init(
  {
    day: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME(),
      allowNull: false
    },
    ending_time: {
      type: DataTypes.TIME(),
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'DailyEntry',
    tableName: 'DailyEntry'
  }
);

DailyEntry.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(DailyEntry, { foreignKey: 'id_user' });

export default DailyEntry;
