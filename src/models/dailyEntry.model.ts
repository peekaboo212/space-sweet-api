import DailyEntry from '../database/models/dailyEntry.model';

interface ErrorMessage {
  message: string;
}

const DailyEntryModel = {
  getDailyTime: async (idUser: number): Promise<null | ErrorMessage> => {
    try {
      const records = await DailyEntry.findAll({
        attributes: ['start_time', 'ending_time'],
        where: { id_user: idUser }
      });
      const duration =
        (records[0].ending_time.getTime() - records[0].start_time.getTime()) /
        60000;

      return { message: duration.toString() };
    } catch (e) {
      console.log(e);
      return { message: 'Error al encontrar usuario' };
    }
  }
};

export default DailyEntryModel;
