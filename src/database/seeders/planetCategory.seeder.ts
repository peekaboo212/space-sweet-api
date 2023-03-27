import PlanetCategory from '../models/planetCategory.model';

export const PlanetCategorySeed = async (): Promise<void> => {
  await PlanetCategory.bulkCreate([
    { category: 'Divertido' },
    { category: 'Futurista' }
  ]);
};
