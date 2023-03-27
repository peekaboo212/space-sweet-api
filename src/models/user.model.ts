import User from '../database/models/user.model';

interface FindUserResult {
  id_user: number;
  username: string;
  email: string;
  daily_goal: Date;
  stars: number;
  password: string;
}

interface ErrorMessage {
  message: string;
}

const UserModel = {
  findUser: async (
    idUser: number
  ): Promise<FindUserResult | null | ErrorMessage> => {
    try {
      const user = await User.findOne({
        where: { id_user: idUser }
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
  ): Promise<FindUserResult | null | ErrorMessage> => {
    try {
      console.log(username, email, password);
      const user = await User.create({
        username,
        email,
        password,
        stars: 0
      });
      console.log('siii');
      return user;
      // return user;
    } catch (e) {
      return { message: 'Error al crear usuario' };
    }
  }
};

export default UserModel;
