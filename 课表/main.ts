interface ILesson {
  lessonName: string;
  lessonWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7; //星期几
  lessonDayTimeRange: Array<number>; // 第几节
  lessonWeekTimeRange: Array<number>; //哪几周
  lessonSingleWeek: 0 | 1 | 2; //0-全部,1-单周,2-双周
  lessonTeacher: string;
  lessonClassRoom: string; //教室
}

const START_YEAR = 2024,
  START_MONTH = 8,
  START_DAY = 26; //2024.9.9 星期一 开学

let lessonList: ILesson[] = [];

const MONTH_DAY_NUMBER = {
  1: 31,
  2: (() => {
    const date = new Date();
    return isLeapYear(date.getFullYear()) ? 29 : 28;
  })(),
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const DAY_TIME_ARRAY = {
  1: ["8:15", "9:00"],
  2: ["9:05", "9:50"],
  3: ["10:10", "10:55"],
  4: ["11:00", "11:45"],
  5: ["14:00", "14:45"],
  6: ["14:50", "15:35"],
  7: ["15:55", "16:40"],
  8: ["16:45", "17:30"],
  9: ["19:00", "19:45"],
  10: ["19:50", "20:35"],
  11: ["20:40", "21:25"],
};

function getAfterNDay({ year, month, day, n }) {
  let currentYear = year;
  let currentMonth = month;
  let currentDay = day + n;
  let maxMonthNum = MONTH_DAY_NUMBER[currentMonth];
  let maxLastMonthNum =
    MONTH_DAY_NUMBER[currentMonth - 1 < 1 ? 12 : currentMonth - 1];
  while (currentDay > maxMonthNum) {
    currentDay -= maxMonthNum;
    if (++currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
    maxMonthNum = MONTH_DAY_NUMBER[currentMonth];
  }
  while (currentDay <= 0) {
    currentDay += maxLastMonthNum;
    if (--currentMonth <= 0) {
      currentMonth = 12;
      currentYear--;
    }
    maxMonthNum = maxLastMonthNum[currentMonth - 1 < 1 ? 12 : currentMonth - 1];
  }

  return { year: currentYear, month: currentMonth, day: currentDay };
}

function getWeekLesson() {
  const date = new Date();
  const weekLessons = [];
  const weekDay = date.getDay();
  for (let i = 1; i <= 5; i++) {
    const lesson = getLesson(
      getAfterNDay({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        n: i - weekDay,
      })
    );
    weekLessons.push(...lesson);
  }
  return weekLessons;
}

//是否为闰年
function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//计算第几周星期几   [第几周,星期几]
function calculateDay(year: number, month: number, day: number) {
  let startDay = 1;
  if (year > START_YEAR) {
    let days = 0;
    for (let i = START_MONTH; i < 12; i++) {
      days += MONTH_DAY_NUMBER[i];
    }
    for (let i = 1; i < month; i++) {
      days += MONTH_DAY_NUMBER[i];
    }
    startDay += days + day - START_DAY;
  } else {
    let days = 0;
    for (let i = START_MONTH; i < month; i++) {
      days += MONTH_DAY_NUMBER[i];
    }
    startDay += days + day - START_DAY;
  }
  return {
    currentWeek: Math.ceil(startDay / 7),
    currentDay: startDay % 7 === 0 ? 7 : startDay % 7,
  };
}

//通过 年月日 得对应课程
function getLesson({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}) {
  const { currentDay, currentWeek } = calculateDay(year, month, day);
  const todayLesson = lessonList.filter((v) => {
    if (currentDay === v.lessonWeek) {
      if (
        currentWeek >= v.lessonWeekTimeRange[0] &&
        currentWeek <= v.lessonWeekTimeRange[1]
      ) {
        if (v.lessonSingleWeek == 0) return true;
        if (v.lessonSingleWeek == currentWeek % 2) {
          return true;
        }
      }
    }
    return false;
  });

  return todayLesson.map((v) => {
    return {
      ...v,
      lessonTimeRange: [
        DAY_TIME_ARRAY[v.lessonDayTimeRange[0]][0],
        DAY_TIME_ARRAY[v.lessonDayTimeRange[1]][1],
      ],
    };
  });
}

//今日课表
function getTodayLesson() {
  const date = new Date();
  return getLesson({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });
}
function start() {
  fetch("./lesson.json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return data as ILesson[];
    })
    .then((data) => {
      // console.log(data, "data");
      lessonList = data;
      const todayLesson = getTodayLesson();
      console.log(todayLesson, "todayLesson");
    });
}

start();
