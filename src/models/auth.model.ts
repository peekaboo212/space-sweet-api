import User from '../database/models/user.model';
import bcrypt from 'bcryptjs';

interface ErrorMessage {
  message: string;
}

interface Response {
  status: boolean;
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
            status: true,
            username: user.username,
            email: user.email
          };
        } else {
          return {
            status: false,
            username: '',
            email: ''
          };
        }
      } else {
        return {
          status: false,
          username: '',
          email: ''
        };
      }
    } catch (e) {
      return { message: 'Usuario o contraseña incorrecta' };
    }
  }
};

export default AuthModel;
