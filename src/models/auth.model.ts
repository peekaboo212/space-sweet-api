import User from '../database/models/user.model';
import bcrypt from 'bcryptjs';

interface ErrorMessage {
  message: string;
}

const AuthModel = {
  logIn: async (
    email: string,
    password: string
  ): Promise<boolean | ErrorMessage> => {
    try {
      const user: User | null = await User.findOne({
        where: { email }
      });
      if (user != null) {
        const passwordIsOk: boolean = bcrypt.compareSync(
          password,
          user.password
        );
        return passwordIsOk;
      } else {
        return false;
      }
    } catch (e) {
      return { message: 'Usuario o contraseña incorrecta' };
    }
  }
};

export default AuthModel;
