import PlanetCategory from '../models/planetCategory.model';

export const planetCategorySeed = async (): Promise<void> => {
  await PlanetCategory.bulkCreate([
    { category: 'Divertido' },
    { category: 'Futurista' }
  ]);
};
