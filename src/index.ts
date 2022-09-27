type StrOrNum = string | number;
type CalendarObj = { year: number; month: number; day: number; week: number };

const DECIMAL: number = 10;

const isString = (data: StrOrNum): boolean =>
  Object.prototype.toString.call(data) === '[object String]';

const convertToNum = (data: StrOrNum): number =>
  isString(data) ? parseInt(data as string, DECIMAL) : (data as number);

const addPrefix = (data: StrOrNum): string =>
  convertToNum(data) < DECIMAL ? `0${data}` : `${data}`;

const deletePrefix = (data: string): number => parseInt(data, DECIMAL);

const getPeriod = (start: string, end: string): { startDate: Date; endDate: Date } => {
  const dateStart: string[] = start.split('-');
  const startDate = new Date(
    convertToNum(dateStart[0]),
    deletePrefix(dateStart[1]) - 1,
    deletePrefix(dateStart[2])
  );

  const dateEnd: string[] = end.split('-');
  const endDate = new Date(
    parseInt(dateEnd[0], 10),
    deletePrefix(dateEnd[1]) - 1,
    deletePrefix(dateEnd[2])
  );

  return {
    startDate,
    endDate
  };
};

const getCalendar = (start: string, end: string): CalendarObj[] => {
  const period = [];
  const { startDate, endDate } = getPeriod(start, end);

  while (endDate.getTime() - startDate.getTime() >= 0) {
    const year = startDate.getFullYear() - 0;
    const month = startDate.getMonth() - 0;
    const day = startDate.getDate() - 0;
    const week = startDate.getDay() - 0;
    const obj = {
      year,
      month,
      day,
      week
    };

    period.push(obj);

    startDate.setDate(startDate.getDate() + 1);
  }

  return period;
};

const getWeek = (date: StrOrNum): number => {
  let year, month, day;

  if (isString(date)) {
    const dateArr = (date as string).split(/[-/]/);

    year = convertToNum(dateArr[0]);
    month = convertToNum(dateArr[1]) - 1;
    day = convertToNum(dateArr[2]);
  }

  const dateFormat = new Date(date);

  year = dateFormat.getFullYear();
  month = dateFormat.getMonth();
  day = dateFormat.getDate();

  return new Date(year, month, day).getDay();
};

const getMonthWeek = (year: StrOrNum, month: StrOrNum, date: StrOrNum): number => {
  const dateNow = new Date(convertToNum(year), convertToNum(month) - 1, convertToNum(date));
  const week = dateNow.getDay();
  const day = dateNow.getDate();

  return Math.ceil((day + 6 - week) / 7);
};

const getYearWeek = (year: StrOrNum, month: StrOrNum, date: StrOrNum): number => {
  const dateFirst = new Date(convertToNum(year), 0, 1);
  const oneDayTime = 24 * 60 * 60 * 1000;
  const dateNow = new Date(convertToNum(year), convertToNum(month) - 1, convertToNum(date));
  const dayDifference = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / oneDayTime);

  return Math.ceil((dayDifference + dateFirst.getDay()) / 7);
};

const getDays = (startDate: string, endDate: string): number => {
  const periodDate = new Date(new Date(endDate).getTime() - new Date(startDate).getTime());
  const timeDifference = periodDate.getTime();

  return convertToNum(`${timeDifference / (24 * 60 * 60 * 1000)}`);
};

const getHours = (startDate: string, endDate: string): number => {
  const milliseconds = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());
  const hoursLeft = milliseconds % (24 * 3600 * 1000);

  return Math.floor(hoursLeft / (3600 * 1000));
};

const getMinutes = (startDate: string, endDate: string): number => {
  const defaultDate = new Date(0);
  const periodDate = new Date(new Date(endDate).getTime() - new Date(startDate).getTime());

  return periodDate.getMinutes() - defaultDate.getMinutes();
};

const getSeconds = (startDate: string, endDate: string): number => {
  const periodDate = new Date(new Date(endDate).getTime() - new Date(startDate).getTime());
  const timeDifference = periodDate.getTime();
  const days = getDays(startDate, endDate);
  const hours = getHours(startDate, endDate);
  const minutes = getMinutes(startDate, endDate);

  return convertToNum(
    `${timeDifference / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60}`
  );
};

export {
  addPrefix,
  deletePrefix,
  getCalendar,
  getMonthWeek,
  getWeek,
  getYearWeek,
  getDays,
  getHours,
  getMinutes,
  getSeconds
};
