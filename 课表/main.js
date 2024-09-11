var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var StartYear = 2024, StartMonth = 8, StartDay = 26; //2024.9.9 星期一 开学
var lessonList = [];
var MonthDayNumber = {
    1: 31,
    2: (function () {
        var date = new Date();
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
var DayTimeArray = {
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
function getAfterNDay(_a) {
    var year = _a.year, month = _a.month, day = _a.day, n = _a.n;
    var currentYear = year;
    var currentMonth = month;
    var currentDay = day + n;
    var maxMonthNum = MonthDayNumber[currentMonth];
    var maxLastMonthNum = MonthDayNumber[currentMonth - 1 < 1 ? 12 : currentMonth - 1];
    while (currentDay > maxMonthNum) {
        currentDay -= maxMonthNum;
        if (++currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        maxMonthNum = MonthDayNumber[currentMonth];
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
    var date = new Date();
    var weekLessons = [];
    var weekDay = date.getDay();
    for (var i = 1; i <= 5; i++) {
        var lesson = getLesson(getAfterNDay({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            n: i - weekDay,
        }));
        weekLessons.push.apply(weekLessons, lesson);
    }
    return weekLessons;
}
//是否为闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//计算第几周星期几   [第几周,星期几]
function calculateDay(year, month, day) {
    var startDay = 1;
    if (year > StartYear) {
        var days = 0;
        for (var i = StartMonth; i < 12; i++) {
            days += MonthDayNumber[i];
        }
        for (var i = 1; i < month; i++) {
            days += MonthDayNumber[i];
        }
        startDay += days + day - StartDay;
    }
    else {
        var days = 0;
        for (var i = StartMonth; i < month; i++) {
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
function getLesson(_a) {
    var year = _a.year, month = _a.month, day = _a.day;
    var _b = calculateDay(year, month, day), currentDay = _b.currentDay, currentWeek = _b.currentWeek;
    var todayLesson = lessonList.filter(function (v) {
        if (currentDay === v.lessonWeek) {
            if (currentWeek >= v.lessonWeekTimeRange[0] &&
                currentWeek <= v.lessonWeekTimeRange[1]) {
                if (v.lessonSingleWeek == 0)
                    return true;
                if (v.lessonSingleWeek == currentWeek % 2) {
                    return true;
                }
            }
        }
        return false;
    });
    return todayLesson.map(function (v) {
        return __assign(__assign({}, v), { lessonTimeRange: [
                DayTimeArray[v.lessonDayTimeRange[0]][0],
                DayTimeArray[v.lessonDayTimeRange[1]][1],
            ] });
    });
}
//今日课表
function getTodayLesson() {
    var date = new Date();
    return getLesson({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
    });
}
function start() {
    fetch("./lesson.json")
        .then(function (data) {
        return data.json();
    })
        .then(function (data) {
        return data;
    })
        .then(function (data) {
        // console.log(data, "data");
        lessonList = data;
        var todayLesson = getTodayLesson();
        console.log(todayLesson, "todayLesson");
    });
}
start();
