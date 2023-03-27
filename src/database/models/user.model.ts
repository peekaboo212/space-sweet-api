import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';
import bcrypt from 'bcryptjs';

interface UserAttributes {
  id_user: number;
  username: string;
  email: string;
  password: string;
  daily_goal: Date;
  stars: number;
}

class User
  extends Model<Partial<UserAttributes>>
  implements Partial<UserAttributes>
{
  public id_user!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public daily_goal!: Date;
  public stars!: number;
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function (password: string) {
        const salt = bcrypt.genSaltSync(10); // generando la sal aleatoria
        const hash = bcrypt.hashSync(password, salt); // creando el hash utilizando bcrypt
        this.setDataValue('password', hash); // almacenando el hash en la base de datos
      }
    },
    daily_goal: {
      type: DataTypes.TIME(),
      allowNull: false,
      defaultValue: '00:30:00'
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'User'
  }
);

export default User;
