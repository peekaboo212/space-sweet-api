import Binnacle from '../database/models/binnacle.model';

interface ErrorMessage {
  message: string;
}

const BinnacleModel = {
  listPlanets: async (
    idUser: number
  ): Promise<Binnacle[] | null | ErrorMessage> => {
    try {
      const planets: Binnacle[] = await Binnacle.findAll();
      console.log(planets);
      console.log(idUser);
      return planets;
    } catch (e) {
      return { message: 'Error al encontrar usuario' };
    }
  }
};

export default BinnacleModel;
