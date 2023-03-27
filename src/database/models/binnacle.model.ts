import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';
import User from './user.model';
import Planet from './planet.model';

interface BinnacleAttributes {
  id_user: number;
  id_planet: number;
}

class Binnacle extends Model<BinnacleAttributes> implements BinnacleAttributes {
  public id_user!: number;
  public id_planet!: number;
}

Binnacle.init(
  {
    id_planet: {
      type: DataTypes.INTEGER,
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
    modelName: 'Binnacle',
    tableName: 'Binnacle'
  }
);

Binnacle.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Binnacle, { foreignKey: 'id_user' });

Binnacle.belongsTo(Planet, { foreignKey: 'id_planet' });
Planet.hasMany(Binnacle, { foreignKey: 'id_planet' });

export default Binnacle;
