import User from '../models/user.model';

export const userSeed = async (): Promise<void> => {
  await User.bulkCreate([
    {
      username: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password1'
    },
    {
      username: 'Sofia Chavarria',
      email: 'sofia212@example.com',
      password: 'password1'
    },
    {
      username: 'Alfredo Alvarado',
      email: 'freddy@example.com',
      password: 'password1'
    }
  ]);
};
