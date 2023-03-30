import Binnacle from '../models/binnacle.model';

export const binnacleSeed = async (): Promise<void> => {
  await Binnacle.bulkCreate([
    {
      id_planet: 1,
      id_user: 1
    },
    {
      id_planet: 2,
      id_user: 1
    }
  ]);
};
