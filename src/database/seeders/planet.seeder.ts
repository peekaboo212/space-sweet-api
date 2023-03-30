import Planet from '../models/planet.model';

export const planetSeed = async (): Promise<void> => {
  await Planet.bulkCreate([
    {
      planet_name: 'divertilandia',
      id_category: 1,
      description: 'El planeta donde reina la diversión',
      price: 100
    },
    {
      planet_name: 'WP55',
      id_category: 2,
      description: 'Planeta futurista',
      price: 500
    }
  ]);
};
