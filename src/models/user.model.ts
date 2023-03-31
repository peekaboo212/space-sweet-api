import User from '../database/models/user.model';

interface ErrorMessage {
  message: string;
}

interface UserGoals {
  stars: number;
  daily_goal: Date;
}

const UserModel = {
  findGoalsUser: async (
    idUser: number
  ): Promise<UserGoals | null | ErrorMessage> => {
    try {
      const user = await User.findOne({
        where: { id_user: idUser },
        attributes: ['stars', 'daily_goal']
      });
      return user;
    } catch (e) {
      return { message: 'Error al encontrar usuario' };
    }
  },
  addUser: async (
    username: string,
    email: string,
    password: string
  ): Promise<User | null | ErrorMessage> => {
    try {
      const user = await User.create({
        username,
        email,
        password,
        stars: 0
      });
      return user;
    } catch (e) {
      return { message: 'Error al crear usuario' };
    }
  },
  updateStars: async (
    idUser: number,
    stars: number
  ): Promise<true | null | ErrorMessage> => {
    try {
      await User.update(
        { stars },
        {
          where: { id_user: idUser }
        }
      );
      return true;
    } catch (e) {
      return { message: 'Error al crear usuario' };
    }
  }
};

export default UserModel;
