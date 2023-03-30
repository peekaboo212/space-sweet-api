import DailyEntry from '../models/dailyEntry.model';

export const dailyEntrySeed = async (): Promise<void> => {
  const timeIn1 = new Date();
  timeIn1.setHours(14);
  timeIn1.setMinutes(5);

  const timeOut1 = new Date();
  timeOut1.setHours(16);
  timeOut1.setMinutes(0);

  const timeIn2 = new Date();
  timeIn2.setHours(8);
  timeIn2.setMinutes(20);

  const timeOut2 = new Date();
  timeOut2.setHours(11);
  timeOut2.setMinutes(45);

  await DailyEntry.bulkCreate([
    {
      day: new Date('2023-05-15'),
      start_time: timeIn1,
      ending_time: timeOut1,
      id_user: 1
    },
    {
      day: new Date('2023-05-15'),
      start_time: timeIn2,
      ending_time: timeOut2,
      id_user: 1
    }
  ]);
};
