import DailyEntry from '../models/dailyEntry.model';

const startTime = new Date(2023, 2, 30, 10, 30, 0);
const startTimeISO = new Date(
  startTime.getTime() - startTime.getTimezoneOffset() * 60000
);

const endTime = new Date(2023, 2, 30, 14, 50, 0);
const endTimeISO = new Date(
  endTime.getTime() - endTime.getTimezoneOffset() * 60000
);

const startTime2 = new Date(2023, 2, 28, 8, 22, 0);
const startTimeISO2 = new Date(
  startTime2.getTime() - startTime2.getTimezoneOffset() * 60000
);

const endTime2 = new Date(2023, 2, 28, 14, 10, 0);
const endTimeISO2 = new Date(
  endTime2.getTime() - endTime2.getTimezoneOffset() * 60000
);

export const dailyEntrySeed = async (): Promise<void> => {
  await DailyEntry.bulkCreate([
    {
      start_time: startTimeISO,
      ending_time: endTimeISO,
      id_user: 1
    },
    {
      start_time: startTimeISO2,
      ending_time: endTimeISO2,
      id_user: 1
    }
  ]);
};
