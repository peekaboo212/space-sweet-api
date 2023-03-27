/* eslint-disable @typescript-eslint/no-floating-promises */
// import sequelize from '../index';
import sequelize from '../index';
// MODELS
import Binnacle from '../models/binnacle.model';
import User from '../models/user.model';
import DailyEntry from '../models/dailyEntry.model';
import Planet from '../models/planet.model';
import PlanetCategory from '../models/planetCategory.model';
import Reward from '../models/reward.model';
// SEEDERS
import { UserSeed } from './user.seeder';
import { PlanetSeed } from './planet.seeder';
import { PlanetCategorySeed } from './planetCategory.seeder';
import { BinnacleSeed } from './binnacle.seeder';

(async () => {
  try {
    await sequelize.authenticate();
    // Sincronizar los modelos con la base de datos
    await User.sync();
    await PlanetCategory.sync();
    await Planet.sync();
    await Reward.sync();
    await DailyEntry.sync();
    await Binnacle.sync();

    await UserSeed();
    await PlanetCategorySeed();
    await PlanetSeed();
    await BinnacleSeed();

    console.log('Base de datos sincronizada correctamente');
  } catch (e) {
    console.log({ e });
  }
})();
