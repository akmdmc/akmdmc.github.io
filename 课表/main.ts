interface ILesson {
  lessonName: string;
  lessonWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7; //星期几
  lessonDayTimeRange: Array<number>; // 第几节
  lessonWeekTimeRange: Array<number>; //哪几周
  lessonSingleWeek: 0 | 1 | 2; //0-全部,1-单周,2-双周
  lessonTeacher: string;
  lessonClassRoom: string; //教室
}

const StartYear = 2024,
  StartMonth = 8,
  StartDay = 26; //2024.9.9 星期一 开学

let lessonList: ILesson[] = [];

const MonthDayNumber = {
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

//是否为闰年
function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//计算第几周星期几   [第几周,星期几]
function calculateDay(year: number, month: number, day: number) {
  let startDay = 1;
  if (year > StartYear) {
    let days = 0;
    for (let i = StartMonth; i < 12; i++) {
      days += MonthDayNumber[i];
    }
    for (let i = 1; i < month; i++) {
      days += MonthDayNumber[i];
    }
    startDay += days + day - StartDay;
  } else {
    let days = 0;
    for (let i = StartMonth; i < month; i++) {
      days += MonthDayNumber[i];
    }
    startDay += days + day - StartDay;
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

  return todayLesson;
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
