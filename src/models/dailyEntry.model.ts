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
      let time = 0;
      // eslint-disable-next-line array-callback-return
      records.map((record) => {
        time = time + getTime(record.start_time, record.ending_time);
      });
      return { message: time.toString() };
    } catch (e) {
      console.log(e);
      return { message: 'Error al encontrar usuario' };
    }
  }
};

const getTime = (enter: Date, leave: Date): number => {
  const input = enter.toString().split(':');
  const output = leave.toString().split(':');
  const timeStart = new Date();
  const timeEnd = new Date();
  timeStart.setHours(
    parseInt(input[0]),
    parseInt(input[1]),
    parseInt(input[2]),
    0
  );
  timeEnd.setHours(
    parseInt(output[0]),
    parseInt(output[1]),
    parseInt(output[2]),
    0
  );
  const hourDiff = (timeEnd.getTime() - timeStart.getTime()) / 60000;
  return hourDiff;
};

export default DailyEntryModel;
