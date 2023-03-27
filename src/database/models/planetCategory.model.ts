import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';

interface PlanetCategoryAttributes {
  id_category: number;
  category: string;
}

class PlanetCategory
  extends Model<Partial<PlanetCategoryAttributes>>
  implements Partial<PlanetCategoryAttributes>
{
  public id_category!: number;
  public category!: string;
}

PlanetCategory.init(
  {
    id_category: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'PlanetCategory',
    tableName: 'PlanetCategory'
  }
);

export default PlanetCategory;
