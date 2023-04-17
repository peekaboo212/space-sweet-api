import User from '../database/models/user.model';
import bcrypt from 'bcryptjs';

interface ErrorMessage {
  message: string;
}

interface Response {
  validation: boolean;
  username: string;
  email: string;
}

const AuthModel = {
  logIn: async (
    email: string,
    password: string
  ): Promise<Response | boolean | ErrorMessage> => {
    try {
      const user: User | null = await User.findOne({
        where: { email }
      });
      if (user != null) {
        const passwordIsOk: boolean = bcrypt.compareSync(
          password,
          user.password
        );
        if (passwordIsOk) {
          return {
            validation: true,
            username: user.username,
            email: user.email
          };
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (e) {
      return { message: 'Usuario o contraseña incorrecta' };
    }
  }
};

export default AuthModel;
