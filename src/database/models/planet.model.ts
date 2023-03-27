import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';
import PlanetCategory from './planetCategory.model';

interface PlanetAttributes {
  id_planet: number;
  planet_name: string;
  id_category: number;
  description: string;
  price: number;
}

class Planet
  extends Model<Partial<PlanetAttributes>>
  implements Partial<PlanetAttributes>
{
  public id_planet!: number;
  public planet_name!: string;
  public id_category!: number;
  public description!: string;
  public price!: number;
}

Planet.init(
  {
    id_planet: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    planet_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Planet',
    tableName: 'Planet'
  }
);

Planet.belongsTo(PlanetCategory, { foreignKey: 'id_category' });
PlanetCategory.hasMany(Planet, { foreignKey: 'id_category' });

// PlanetCategory.belongsTo(Planet, { foreignKey: 'id_category' });
// Planet.hasMany(PlanetCategory, { foreignKey: 'id_category' });

export default Planet;
